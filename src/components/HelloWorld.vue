<template>
  <div class="hello">
     {{msg}}
     {{state.result}}
     <input v-model="state.num1"   /> +<input   v-model="state.num2">=<input readonly v-model="state.result"/>
  </div>
  <h1>{{user.value}} {{msg2}}</h1>
  <div>{{ collectionName }}: {{ readersNumber }} {{ book.title }}</div>
  <slot></slot>
  <input v-model="num">
  <h1>{{num}}</h1>
  <button @click="addPer">添加属性</button>
  <br>
  <p>car: {{car}}</p>
  <p>当前位置： x: {{point.x}} y: {{ point.y }}</p>
</template>

<script>
import {reactive, ref, computed, onMounted, watch, watchEffect, customRef, inject} from 'vue'
import getMsg from './Test.js'
import usePoint from '../hook/usePoint'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    collectionName: {
       type: String,
       default: 'vue'
    }
  },
  inject: ['user'],
  data (){
    return  {
      num1: 1,
    }
  },
  components: {
  },
  setup(props, context){
    console.log(props, context)
    let state=reactive({
      num1:0,
      num2:0,
      result:computed(()=> parseInt(state.num1) + parseInt(state.num2))
    })
    const readersNumber = ref(0)
    const book = reactive({title: 'Vue3 guide'})
    let point = usePoint()
    let num = myRef(1)
    console.log(point)
    let car = inject('car')
    console.log(car)
    // 自定义实现防抖
    function myRef (value){
      let timer ;
      return customRef((track, trigger) => {
        return {
          get(){
            console.log('get....')
            track()
            return value
          },
          set(newVal) {
              console.log('有人修改了'+ newVal)
              value = newVal
              clearTimeout(timer)
              // 延时
               timer =  setTimeout(() => {
                   trigger()
               },500)
            
          }
        }
      });
    }
   //
    onMounted(()=>{
      console.log(" onMonunted....", props.collectionName);
      console.log ( getMsg())
      
     
    })
    // 监听具体属性 state。num1  deep 无效 
    watch(()=> state.num1, (val,oldVal) => {
      console.log('num1',val, oldVal)
    },{deep: true, immediate: true})
    watchEffect(()=>{
      console.log('watchEffect....')
      console.log(state.num1)
    })
  //  function keyNum() {
  //    // console.log(e);
  //      state.result=parseInt(state.num1)+parseInt(state.num2);
  //   }
  function addPer () {
     // 给 stata 添加一个属性
     state.msg = 'ok'
     state.book = book
  }
     // 暴露给 template
    return {state, readersNumber, book, msg2: ref(getMsg()), addPer, point, num, car}
    
  },
  // #region
/*   watch: {
    state: {
      handler(n){
        console.log(n)
        console.log(this.$data)
       //  gsap.to(this.$data, { duration: 2.5, state:n.value})
      },
      deep: true,
      immediate: true
    }
  } */
  // #endregion
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
