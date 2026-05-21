import DefaultTheme from 'vitepress/theme'
import CarouselDemo from '../components/CarouselDemo.vue'
import CarouselControlsDemo from '../components/CarouselControlsDemo.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CarouselDemo', CarouselDemo)
    app.component('CarouselControlsDemo', CarouselControlsDemo)
  },
}
