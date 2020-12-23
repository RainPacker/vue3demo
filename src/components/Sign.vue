/* eslint-disable */
<template>
    <div class="signature">
        <div class="title">请在虚线方框内签名</div>
        <canvas
                ref="canvas"
                id="canvas">签名区域</canvas>
        <div class="canvas-btn">
            <button class="primary" @click="save('signature')">保存</button>
            <button class="danger" @click="clear">清除</button>
        </div>
    </div>
</template>
 /* eslint-disable */
<script>
    let draw;
    let canvasWidth;
    let canvasHeight;
    let preHandler = function(e) {
        if(e.preventDefault){
            e.preventDefault();
        }else{
            e.returnValue = false;
        }
    };
 
    var meta = document.createElement('meta');
    meta.content = 'portrait';
    document.getElementsByTagName('head')[0].appendChild(meta);
 
    //获取当前屏幕的宽高
    function getWindowSize(){
        canvasWidth = document.documentElement.clientWidth - 40;
        if(!canvasWidth){
            return;
        }
        hengshuping();
    }
 
    //判断手机横竖屏状态：
    function hengshuping(){
        if(window.orientation==180||window.orientation==0){
            // alert("竖屏状态！")
            canvasHeight = document.documentElement.clientHeight - document.documentElement.clientHeight / 1.4;
        }
        if(window.orientation==90||window.orientation==-90){
            // alert("横屏状态！")
            canvasHeight = document.documentElement.clientHeight - 63;
        }
    }
 
    getWindowSize();
 
    window.onresize = function(){
        getWindowSize();
        draw = {};
        draw = new Draw("canvas");
        draw.init();
    };
 
    class Draw {
        constructor(el){
            if(!canvasWidth){return;}
            console.log(canvasWidth);
            this.el = el;
            this.canvas = document.getElementById(this.el);
            if(!this.canvas){return;}
            this.canvas.width = canvasWidth;
            this.canvas.height = canvasHeight;
            this.cxt = this.canvas.getContext("2d");
            this.stageInfo = canvas.getBoundingClientRect();
            this.path = {
                beginX: 0,
                beginY: 0,
                endX: 0,
                endY: 0
            };
        }
        init(btn){
            if(!this.canvas){
                return;
            }
            this.canvas.addEventListener("touchstart", event => {
                document.addEventListener("touchstart", preHandler, {passive: false});
                this.drawBegin(event);
            }, {passive: false});
            this.canvas.addEventListener("touchend", event => {
                document.addEventListener("touchend", preHandler, {passive: false});
                this.drawEnd();
            }, {passive: false});
            this.clear(btn);
        }
        drawBegin(e){
            window.getSelection()
                ? window.getSelection().removeAllRanges()
                : document.selection.empty();
            this.cxt.strokeStyle = "#000";
            this.cxt.beginPath();
            this.cxt.moveTo(
                e.changedTouches[0].clientX - this.stageInfo.left,
                e.changedTouches[0].clientY - this.stageInfo.top
            );
            this.path.beginX = e.changedTouches[0].clientX - this.stageInfo.left;
            this.path.beginY = e.changedTouches[0].clientY - this.stageInfo.top;
            canvas.addEventListener("touchmove", ()=>{
                this.drawing(event);
            }, {passive: false});
        }
        drawing(e){
            this.cxt.lineTo(
                e.changedTouches[0].clientX - this.stageInfo.left,
                e.changedTouches[0].clientY - this.stageInfo.top
            );
            this.path.endX = e.changedTouches[0].clientX - this.stageInfo.left;
            this.path.endY = e.changedTouches[0].clientY - this.stageInfo.top;
            this.cxt.stroke();
        }
        checkCanvas(){
            var blank = document.createElement('canvas');
            blank.width = canvas.width;
            blank.height = canvas.height;
            return canvas.toDataURL() == blank.toDataURL();
        }
        drawEnd(){
            document.removeEventListener("touchstart", preHandler, false);
            document.removeEventListener("touchend", preHandler, false);
            document.removeEventListener("touchmove", preHandler, false);
        }
        clear(){
            this.cxt.clearRect(0, 0, canvasWidth, canvasHeight);
        }
        save(fileName){
            let imgURL = canvas.toDataURL('image/png');
            return imgURL;
        }
    }
    export default {
        props: {
            show: {default:false},
        },
 
        mounted(){
            draw = new Draw("canvas");
            draw.init();
        },
 
        methods: {
            clear: function(){
                draw.clear();
            },
            save: function(fileName){
                let data = draw.save(fileName);
                if(draw.checkCanvas()){
                    alert('请签名');
                    return;
                }
 
                this.$emit('signature', data);
                this.clear();
            },
        },
        watch: {
            show(){
                if(this.show){
                    document.getElementsByClassName('signaturePanel')[0].style = 'z-index:1000';
                }else{
                    document.getElementsByClassName('signaturePanel')[0].style = 'z-index:-100';
                }
            }
        }
    }
</script>
 
<style lang="scss">
    .signature {
        position: relative;
        text-align: right;
        top: 10px;
        padding-right: 10px;
        .title {
            display: inline-block;
            width: 20px;
            vertical-align: top;
            text-align: center;
        }
    }
    #canvas {
        border: 1px dashed #ccc;
        background: #fff;
        display: inline-block;
    }
    .canvas-btn {
        margin-top: 10px;
        font-size: 0;
        position: fixed;
        width: 100%;
        button {
            padding: 10px;
            width: 50%;
        }
    }
 
    * {
        touch-action: pan-y;
    }
</style>