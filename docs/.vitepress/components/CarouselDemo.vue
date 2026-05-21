<template>
  <ClientOnly>
    <div ref="mountEl" />
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  direction:  { type: String,  default: 'horizontal' },
  reverse:    { type: Boolean, default: false },
  numVisible: { type: Number,  default: 3 },
  interval:   { type: Number,  default: 3000 },
  height:     { type: String,  default: '100px' },
})

const mountEl = ref(null)
let root = null

onMounted(async () => {
  const [{ createRoot }, { CarouselDemoReact }, { createElement }] = await Promise.all([
    import('react-dom/client'),
    import('./react/CarouselDemoReact.tsx'),
    import('react'),
  ])
  root = createRoot(mountEl.value)
  root.render(createElement(CarouselDemoReact, { ...props }))
})

onBeforeUnmount(() => root?.unmount())
</script>
