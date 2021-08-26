<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <TodoList></TodoList> -->
    <!-- <Sign></Sign> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import  TodoList  from './components/TodoList'
//import Sign from "./components/Sign"
import {ref, provide,reactive,isProxy} from 'vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    //  TodoList,
    // Sign
  },
  provide: {
    user: ref('Rain')
  },
  setup() {
    let car = reactive({msg:'xxxx'} )
     provide('car',car)
     console.log(isProxy(car))
    return { car}
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
  margin-top: 60px;
}
</style>
