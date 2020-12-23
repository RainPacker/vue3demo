<template>
  <div class="hello">
     {{msg}}
     {{state.result}}
     <input v-model="state.num1"   /> +<input   v-model="state.num2">=<input readonly v-model="state.result"/>
  </div>
</template>

<script>
import {reactive, computed, onMounted} from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    let state=reactive({
      num1:0,
      num2:0,
      result:computed(()=> parseInt(state.num1) + parseInt(state.num2))
    })

    onMounted(()=>{
      console.log(" onMonunted....");
     
    })
   
  //  function keyNum() {
  //    // console.log(e);
  //      state.result=parseInt(state.num1)+parseInt(state.num2);
  //   }
   
    return {state}
  }
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
