<template>
  <div>
       <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">
          Todo List <span class="badge">{{todoNum}}</span>
        </h3>
      </div>
      <div class="panel-body">
        <div class="list-group">
          <ul class="list-group">
            <li
              v-for="item in dataList"
              :key="item.id"
              class="list-group-item list-group-item-info"
            >
              {{ item.name }}
              <a
                style="text-decoration: underline; color: black;"
                type="checkbox"
                @click="finishItem(item)"
              >
                finish</a
              >

              &nbsp;&nbsp;&nbsp;
              <a
                style="text-decoration: underline; color: black;"
                type="checkbox"
                @click="deletItem(item)"
              >
                delete</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive,computed, toRefs, watchEffect, watch} from "vue"
export default {
   name:"itemTodo",
   props:{
       dataList:{
           type:Array
       }
   },
   setup(props,{emit, attrs, slots}){
      console.log(props, emit, attrs, slots)
      console.log(props.dataList); 
    let state=reactive({
       todoNum:computed(()=>props.dataList.length),
       
    })
     function finishItem(item){
        emit("finish-item",item);
     }
      function deletItem(item){
        emit("del-item",item);
     }
     watchEffect(()=>{
       console.log('...watchEffect')
     })
     // 侦听
     watch(state, (cur,old)=> {
       console.log('watch....',cur, old.todoNum)
     }, { deep: true })

    return {
        ...toRefs(state),finishItem,deletItem
    }
   }
}
</script>

<style>

</style>