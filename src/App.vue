<template>
  <Header />
  <router-view path="$router.key" />
  <Footer />
</template>

<script>
import './styles/global.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
