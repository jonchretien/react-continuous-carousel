<template>
  <ClientOnly>
    <div ref="mountEl" />
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const mountEl = ref(null)
let root = null

onMounted(async () => {
  const [{ createRoot }, { CarouselControlsDemoReact }, { createElement }] = await Promise.all([
    import('react-dom/client'),
    import('./react/CarouselControlsDemoReact.tsx'),
    import('react'),
  ])
  root = createRoot(mountEl.value)
  root.render(createElement(CarouselControlsDemoReact))
})

onBeforeUnmount(() => root?.unmount())
</script>
