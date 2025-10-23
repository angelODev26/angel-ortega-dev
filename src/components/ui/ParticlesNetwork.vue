<template>
    <canvas ref="canvas" class="particles-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let animationFrame = null

const particles = {
    count: 15,
    array: [],
    maxDistance: 150
}

class Particle {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 1
    }

    update() {
        this.x += this.vx
        this.y += this.vy

        // Rebote en bordes
        if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        this.ctx.fillStyle = 'var(--color-primary)'
        this.ctx.fill()
    }
}

const initParticles = (canvas) => {
    particles.array = []
    for (let i = 0; i < particles.count; i++) {
        particles.array.push(new Particle(canvas))
    }
}

const drawConnections = (ctx, particlesArray, maxDistance) => {
    for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x
            const dy = particlesArray[i].y - particlesArray[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < maxDistance) {
                const opacity = 1 - distance / maxDistance
                ctx.beginPath()
                ctx.strokeStyle = `rgba(23, 194, 229, ${opacity * 0.3})`
                ctx.lineWidth = 1
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
                ctx.stroke()
            }
        }
    }
}

const animate = (canvas) => {
    const ctx = canvas.getContext('2d')

    // Limpiar canvas con fondo semi-transparente
    ctx.fillStyle = 'rgba(31, 34, 39, 0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Actualizar y dibujar partículas
    particles.array.forEach(particle => {
        particle.update()
        particle.draw()
    })

    // Dibujar conexiones
    drawConnections(ctx, particles.array, particles.maxDistance)

    animationFrame = requestAnimationFrame(() => animate(canvas))
}

const resizeCanvas = (canvas) => {
    const container = canvas.parentElement
    canvas.width = container.clientWidth
    canvas.height = container.clientHeight
}

onMounted(() => {
    const canvasEl = canvas.value
    const container = canvasEl.parentElement

    const handleResize = () => {
        resizeCanvas(canvasEl)
        initParticles(canvasEl)
    }

    // Inicializar
    resizeCanvas(canvasEl)
    initParticles(canvasEl)
    animate(canvasEl)

    // Resize observer
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    onUnmounted(() => {
        resizeObserver.disconnect()
        cancelAnimationFrame(animationFrame)
    })
})
</script>

<style scoped>
.particles-canvas {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    border: 1px solid var(--color-border);
}
</style>