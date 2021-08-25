import {onBeforeMount} from 'vue'
export default function getMsg(props, context){
    console.log(props, context)
    onBeforeMount(()=>{
        console.log('onBeforeMount')
    })
    const msg = 'hello vue3'
    return msg
}