import {createRouter,createWebHistory} from 'vue-router';
import  todoList from '../components/TodoList'
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
            path:'/*',
            component:todoList
        }
    ]
})