import {createRouter,createWebHistory} from 'vue-router';
import  todoList from '../components/TodoList'
import  HelloWorld from '../components/HelloWorld'
const routerHistory = createWebHistory(process.env.BASE_URL);
export default  createRouter({
    "history": routerHistory,
    routes:[

        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:todoList
        },
        {
            path:'/test',
            component:HelloWorld
        },
        {
            path:'/*',
            component:todoList
        }
    ]
})