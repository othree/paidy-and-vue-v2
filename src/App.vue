<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button v-on:click="paidyCheckout()">Checkout</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { launch } from './paidy'
import cartData from './mock-cart'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    paidyCheckout: () => {
      launch(cartData);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
