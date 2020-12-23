import Vuex from 'vuex'
    //公共状态
    const state = {
        todoList : [],
        finishtList:[],
        inputVal:"please input"
     }
      
     //修改公共状态
     const mutations = {
        handleAddTodoItem(state,params){
             state.todoList.push(params);
            
           
         },
         handleFinishItem(state,params){
            state.finishtList.push(params);
         },
         handleDelItem(state,params){
           
            state.todoList.splice(params,1);
         }
      
     }
      //做业务逻辑及异步数据的加载
     const actions = {
        addTodo:function({commit},val){
             commit("handleAddTodoItem",val);
             
         },
         delTodo:function(context,val){
            var index = state.todoList.findIndex((item)=>item.id==val.id);
            console.info(index);
            console.info("context",context);
            context.commit("handleDelItem",index);
        
         },
         finishTodo:function({commit},val){
            var index = state.todoList.findIndex((item)=>item.id==val.item.id);
            console.info(index);
             commit("handleDelItem",index);
             commit("handleFinishItem",val.obj);
         }
      
     }
    
     const getters={
           getTodoNum:state=>{
               return state.todoList.length;
           },
           getFinishNum:state=>state.finishtList.length
    
     };





export default Vuex.createStore({
    state,
    getters,
    mutations,
    actions
  });