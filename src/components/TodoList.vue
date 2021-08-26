<template>
  <div>
    {{store.state}}
   <AddItem  ref="addInput" :title="title" @add-item="addItem"  ></AddItem>
   <Suspense>
     <template v-slot:default>
          <ItemTodoList ref="itemTodo" @finish-item="finishItem" @del-item="delItem" :dataList="list"></ItemTodoList>
     </template>
     <template v-slot:fallback>
       loading...
     </template>
   </Suspense>

   <ItemFinishList :dataList="finishList" ></ItemFinishList>
   
  </div>
</template>

<script>
import {reactive,ref,toRefs,onMounted,defineAsyncComponent} from 'vue';
import {useStore} from 'vuex'
 import   AddItem from "./AddItem"
//import ItemTodoList from "./ItemTodoList"
// 异步引入 组件
const ItemTodoList =  defineAsyncComponent(() => import('./ItemTodoList'))
import ItemFinishList from "./ItemFinishList";
import {useRouter} from "vue-router"
export default {
  name:"todoList",
  components:{
      AddItem,
      ItemTodoList,
      ItemFinishList
  },
  props:{

  },

  setup(props,context){
    let addInput=ref(null)
    const store = useStore();
    console.log(store);
    console.log('----',addInput.value);
     let state= reactive({
         title:'Hello vue 3',
         list:[],
         finishList:[]
     })
   function addItem(v){
     console.info(v.value);
     if(v.value){
       let obj=
      {
         "id":getId(),
         "name":v.value}
       
     state.list.push(obj
     );


      store.commit("handleAddTodoItem",obj);
     //emit("clear");
     addInput.value.clear();
   console.info(addInput)
     // console.info(Ref.addInput)


     }else{
         console.log("error");
         return;
     }
    

   }

   function finishItem(val){
        console.info("...finishiItem...",val);
       let index= state.list.findIndex((item)=>item.id==val.id) ;
       state.list.splice(index,1);
        state.finishList.push(val);
       let  obj={
          "item":val,
          "obj":val
        }
        store.dispatch("finishTodo",obj);
        
       

   }
   function getId(){
      let id=Math.random()*10000000000000000;
       id=Math.round(id);
       return id;
   }
   function delItem(val){
         console.info("...delItem...",val);
       let index= state.list.findIndex((item)=>item.id==val.id) ;
       state.list.splice(index,1);
       store.dispatch("delTodo",val);
       
   }
   onMounted(()=>{
     console.log("mounted...");
     console.info(context.root)
     let router = useRouter();
     console.log(router);
     console.log(router.currentRoute.value.matched);

   })

   return  {
       addItem,...toRefs(state),addInput,finishItem,delItem,store
   }

  }
}
</script>

<style>

</style>