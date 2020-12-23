<template>
  <div>
       <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          Finish  List <span class="badge">{{num}}</span>
        </h3>
      </div>
      <div class="panel-body">
        <div class="list-group">
          <ul class="list-group">
            <li
              v-for="(item, index) in dataList"
              :key="index"
              class="list-group-item list-group-item-dnager"
            >
              {{ item.name }}
              
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {reactive,toRefs,computed} from "vue"
export default {
   name:"finisList",
   props:["dataList"],
   setup(props){
       let state=reactive({
           num:computed(()=>props.dataList.length)
       });
    return {
      ...toRefs(state)
    }
   }
}
</script>

<style>

</style>