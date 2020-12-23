
import { expect } from 'chai'
import { shallowMount,mount} from '@vue/test-utils'
import {mutations} from '@/store/index'
import TodoList from '@/components/Sign.vue'

describe('TodoList.vue', () => {
  it('rend ToodList', () => {
    console.log('mmmmmmmmm',mutations);
   // const { handleAddTodoItem } = mutations
    let state ={
      todoList : [],
      finishtList:[],
      inputVal:"please input"
    }
  //  handleAddTodoItem(state,{id:"1",text:"1"})
     const warper = shallowMount(TodoList);
    console.info(state);
     console.info(warper);
    
  })
})