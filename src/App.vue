<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/who-we-are">Who we are</router-link> |
      <router-link to="/areas-of-practice">Areas of Practice</router-link> |
      <router-link to="/our-fees">Our Fees</router-link> |
      <router-link to="/resources">Resources</router-link> |
      <router-link to="/market-updates">Market Updates</router-link> |
      <router-link to="/contact-us">Contact Us</router-link>
    </div>
    <div class="container">
      <router-view id="router-view"/>
    </div>
    <Footer id="footer"/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#router-view {
  min-height: 65vh;
}

.container {
  margin: 0 1rem;
}

</style>
