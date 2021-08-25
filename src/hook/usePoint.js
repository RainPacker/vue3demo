import {reactive, onMounted, onBeforeUnmount} from 'vue'
export default function usePoint (){
    // 实时获取 鼠标 位置
    let point = reactive({
        x: 0,
        y: 0
    })
    function getPoint(event) {
      // console.log(event)
       point.x = event.clientX
       point.y = event.clientY

    }
    onMounted(() => {
        console.log('usePoint......')
        window.addEventListener('mousemove',getPoint
        )
    })
    onBeforeUnmount(() => {
        window.removeEventListener("mousemove",getPoint)
    })

    return point
    

}