<template>
  <div>
    <h1>{{ title }}</h1>

    <div class="form-group">
      <label for="exampleInputName2">Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputName2"
        @keydown.enter="enterItem"
        @clear="clear"
        v-model="todoItem"
        :placeholder="store.state.inputVal"
      />
    </div>
  </div>
</template>

<script>
import { ref, toRefs} from 'vue';
import{useStore} from 'vuex'
export default {
  props:{
      title:{
          type:String
      }
  },
  setup(props,{emit}){

     let todoItem=ref("")
     const store=useStore();
     function enterItem(){
         emit("add-item",todoItem);
    }
    function clear(){
        console.log("..clear...");
        todoItem.value="";
        return;
    }
    console.info({...toRefs(store)});
    return {
        todoItem,enterItem,clear,store
    }

  }
}
</script>

<style>

</style>