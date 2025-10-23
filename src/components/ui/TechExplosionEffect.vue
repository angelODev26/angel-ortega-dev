<template>
    <canvas ref="canvas" class="tech-explosion-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let animationFrame = null

// Reemplaza el array de technologies con este:
const technologies = [
    { name: 'PHP/Laravel', angle: 0, distance: 51 },
    { name: 'Redis', angle: 60, distance: 65 },
    { name: 'Vue.js', angle: 125, distance: 60 },
    { name: 'Java/Spring', angle: 180, distance: 55 },
    { name: 'PostgreSQL', angle: 250, distance: 66 },
    { name: 'Node.js', angle: 295, distance: 60 },
    { name: 'Git', angle: 330, distance: 80 },
    { name: 'MySQL', angle: 30, distance: 75 },
    { name: 'Docker', angle: 90, distance: 50 },
    { name: 'AWS', angle: 150, distance: 78 },
    { name: 'MongoDB', angle: 210, distance: 71 }
]

const particles = {
    center: { x: 0, y: 0, radius: 15 },
    techNodes: [],
    connections: [],
    waves: []
}

class TechNode {
    constructor(name, angle, distance) {
        this.name = name
        this.angle = angle
        this.baseDistance = distance * 1.4
        this.radius = 8
        this.baseX = 0
        this.baseY = 0
        this.x = 0
        this.y = 0
        this.offset = 0
        this.pulse = 0
    }

    update(centerX, centerY, time, canvasWidth) {
        // Ajustar distancia según el tamaño de pantalla
        const responsiveDistance = canvasWidth < 768 ? this.baseDistance * 0.7 : this.baseDistance

        const rad = (this.angle * Math.PI) / 180
        this.baseX = centerX + Math.cos(rad) * responsiveDistance
        this.baseY = centerY + Math.sin(rad) * responsiveDistance

        this.offset = Math.sin(time * 0.002 + this.angle) * 3
        this.x = this.baseX + Math.cos(time * 0.001 + this.angle) * this.offset
        this.y = this.baseY + Math.sin(time * 0.001 + this.angle) * this.offset

        this.pulse = Math.sin(time * 0.003 + this.angle * 2) * 0.3 + 0.7
    }

    draw(ctx) {
        // Círculo de tecnología con movimiento
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius * this.pulse, 0, Math.PI * 2)

        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.radius * this.pulse
        )
        gradient.addColorStop(0, 'rgba(23, 194, 229, 1)')
        gradient.addColorStop(0.7, 'rgba(23, 194, 229, 0.6)')
        gradient.addColorStop(1, 'rgba(23, 194, 229, 0.4)')

        ctx.fillStyle = gradient
        ctx.fill()

        // Texto
        ctx.fillStyle = 'var(--color-text)'
        ctx.font = '11px Space Mono'
        ctx.textAlign = 'center'

        ctx.fillText(this.name, this.x, this.y + 18)
    }
}

// Reemplaza la clase Connection completa con esta:
class Connection {
    constructor(fromX, fromY, toTechNode) {
        this.fromX = fromX
        this.fromY = fromY
        this.toTechNode = toTechNode
        this.phase = Math.random() * Math.PI * 2
        this.lastUpdate = 0
        this.active = true
        this.forkCount = 4 // Número de ramificaciones del rayo
        this.forkLength = 10 // Longitud de las ramificaciones
    }

    update(time) {
        // Efecto de parpadeo más dramático
        if (time - this.lastUpdate > 100) {
            this.lastUpdate = time
            this.active = Math.random() > 0.8 // 70% del tiempo activo para efecto más eléctrico
        }
    }

    draw(ctx) {
        if (!this.active) return

        const targetX = this.toTechNode.x
        const targetY = this.toTechNode.y

        const dx = targetX - this.fromX
        const dy = targetY - this.fromY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const angle = Math.atan2(dy, dx)

        // Línea principal recta con variaciones bruscas
        this.drawLightningBolt(ctx, this.fromX, this.fromY, targetX, targetY, 3)

        // Ramificaciones secundarias
        for (let i = 0; i < this.forkCount; i++) {
            const forkProgress = 0.3 + Math.random() * 0.5
            const forkX = this.fromX + dx * forkProgress
            const forkY = this.fromY + dy * forkProgress

            const forkAngle = angle + (Math.random() - 0.5) * Math.PI / 1.5
            const forkEndX = forkX + Math.cos(forkAngle) * this.forkLength
            const forkEndY = forkY + Math.sin(forkAngle) * this.forkLength

            this.drawLightningSegment(ctx, forkX, forkY, forkEndX, forkEndY, 2)
        }
    }

    drawLightningBolt(ctx, startX, startY, endX, endY, segments) {
        const points = this.generateLightningPoints(startX, startY, endX, endY, segments)

        // Línea principal gruesa
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)

        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y)
        }

        // Gradiente eléctrico intenso
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY)
        gradient.addColorStop(0, 'rgba(23, 194, 229, 1)')
        gradient.addColorStop(0.5, 'rgba(100, 220, 255, 0.9)')
        gradient.addColorStop(1, 'rgba(23, 194, 229, 0.8)')

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
        ctx.stroke()

        // Efecto de brillo interior
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)

        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y)
        }

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.lineWidth = 0.8
        ctx.stroke()
    }

    drawLightningSegment(ctx, startX, startY, endX, endY, segments) {
        const points = this.generateLightningPoints(startX, startY, endX, endY, segments)

        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)

        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y)
        }

        ctx.strokeStyle = 'rgba(100, 220, 255, 0.6)'
        ctx.lineWidth = 1
        ctx.lineCap = 'round'
        ctx.stroke()
    }

    generateLightningPoints(startX, startY, endX, endY, segmentCount) {
        const points = [{ x: startX, y: startY }]
        const dx = endX - startX
        const dy = endY - startY

        for (let i = 1; i < segmentCount; i++) {
            const progress = i / segmentCount
            const baseX = startX + dx * progress
            const baseY = startY + dy * progress

            // Variaciones bruscas y angulares (no suaves)
            const variation = (Math.random() - 0.5) * 12
            const angle = Math.atan2(dy, dx) + Math.PI / 2
            const variedX = baseX + Math.cos(angle) * variation
            const variedY = baseY + Math.sin(angle) * variation

            points.push({ x: variedX, y: variedY })
        }

        points.push({ x: endX, y: endY })
        return points
    }
}

class Wave {
    constructor() {
        this.radius = particles.center.radius
        this.maxRadius = 120
        this.progress = 0
        this.speed = 0.003
    }

    update() {
        this.progress += this.speed
        if (this.progress >= 1) {
            this.progress = 0
        }
    }

    draw(ctx) {
        const currentRadius = this.radius + (this.maxRadius - this.radius) * this.progress
        const alpha = 1 - this.progress

        ctx.beginPath()
        ctx.arc(particles.center.x, particles.center.y, currentRadius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(23, 194, 229, ${alpha * 0.08})`
        ctx.lineWidth = 1.5
        ctx.stroke()
    }
}

const initParticles = (canvas) => {
    particles.techNodes = technologies.map(tech =>
        new TechNode(tech.name, tech.angle, tech.distance)
    )

    particles.center.x = canvas.width / 2
    particles.center.y = canvas.height / 2

    // Inicializar conexiones CORREGIDAS
    particles.connections = particles.techNodes.map(node =>
        new Connection(particles.center.x, particles.center.y, node)
    )

    // INICIALIZAR ONDAS
    particles.waves = [new Wave(), new Wave(), new Wave()]
    particles.waves[0].progress = 0
    particles.waves[1].progress = 0.33
    particles.waves[2].progress = 0.66
}

const drawCenter = (ctx, time) => {
    // Círculo central con pulsación
    const pulse = Math.sin(time * 0.004) * 0.2 + 0.8

    const gradient = ctx.createRadialGradient(
        particles.center.x, particles.center.y, 0,
        particles.center.x, particles.center.y, particles.center.radius * pulse
    )
    gradient.addColorStop(0, 'rgba(23, 194, 229, 1)')
    gradient.addColorStop(0.7, 'rgba(23, 194, 229, 0.7)')
    gradient.addColorStop(1, 'rgba(23, 194, 229, 0.3)')

    ctx.beginPath()
    ctx.arc(particles.center.x, particles.center.y, particles.center.radius * pulse, 0, Math.PI * 2)
    ctx.fillStyle = gradient
    ctx.fill()

    // Punto brillante interno
    ctx.beginPath()
    ctx.arc(particles.center.x, particles.center.y, particles.center.radius * 0.4, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
    ctx.fill()
}

const animate = (canvas, startTime) => {
    const currentTime = Date.now() - startTime
    const ctx = canvas.getContext('2d')

    // Limpiar
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // DIBUJAR ONDAS PRIMERO
    particles.waves.forEach(wave => {
        wave.update()
        wave.draw(ctx)
    })

    // Dibujar centro
    drawCenter(ctx, currentTime)

    // Actualizar y dibujar conexiones
    particles.connections.forEach(connection => {
        connection.update(currentTime)
        connection.draw(ctx)
    })

    // Actualizar y dibujar nodos
    particles.techNodes.forEach(node => {
        node.update(particles.center.x, particles.center.y, currentTime)
        node.draw(ctx)
    })

    animationFrame = requestAnimationFrame(() => animate(canvas, startTime))
}

const resizeCanvas = (canvas) => {
    const container = canvas.parentElement
    canvas.width = container.clientWidth
    canvas.height = container.clientHeight

    particles.center.x = canvas.width / 2
    particles.center.y = canvas.height / 2
}

onMounted(() => {
    const canvasEl = canvas.value
    const container = canvasEl.parentElement
    const startTime = Date.now()

    const handleResize = () => {
        resizeCanvas(canvasEl)
        initParticles(canvasEl)
    }

    // Inicializar
    resizeCanvas(canvasEl)
    initParticles(canvasEl)
    animate(canvasEl, startTime)

    // Observer para resize
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    onUnmounted(() => {
        resizeObserver.disconnect()
        cancelAnimationFrame(animationFrame)
    })
})
</script>

<style scoped>
.tech-explosion-canvas {
    width: 100%;
    height: 100%;
    background: transparent;
}
</style>