console.info("Hello ts");
let str:string="2123"
let str2:any= "2312"

//2typeScript 的基本类型有
/**
 * bolean ,number, string,array,tuple, enum, any,null,undefined, void,null,never
 * 
 */

 var flag:boolean = true
 var a:number = 1;
 var str3:string = '1'
 var arr:number[]=[1,2,3]
 console.log(arr);
 //第二种数组定义
 let arr2:Array<number> =[1,2]
//元组类型
let tuple:[string,number] = ["1",2]
//枚举类型
enum Flag {
    success= 1,
    failed =-1
}
var f:Flag =Flag.success
console.log(Flag.success)
console.log(f)
var n1:number|null|undefined;
console.log(n1)
function run():void {
    console.log("run...");
} 
//函数声明
function run2():string {
    return "hhhh"
}
//匿名函数
var fun2 =function():string{
     return "";
}

function getInfo(name:string, age:number):string {
    return`${name}--->${age}`;
}
// 3.2 可选参数 必须放在最后
function getInfo2(name:string,age?:number):string {
    return `${name}`;
}
//默认参数
function getInfo3(name:string, age:number=2){
    return "";
}
//剩余参数
function sum (...reulst:number[]):number{
         var sum:number=0;
         for(var i:number =0;i<reulst.length;i++){
            sum =sum+ reulst[i]
         }
            return sum;
}

// 2.4 ts 函数重载
// function getInfo(name:number,age:number,type:string): any{
//     return "1111";
// }

//类
class Person {
    name:string;
    age:number =0;
    constructor(n:string){
        this.name =n;
    }
   protected setAage(age:number):void{
        this.age =age;
    }
    fun():void{

    }
        
}

//ts继承
class Stud extends Person {
   private no:number;
   protected score:number=99;
     constructor(n:string,no:number){
         super(n)
         this.no=no;
     }
    public  setNo(no:number):void{
            this.no= no;
     }
     static print():void{
         console.log(this.name);
     }
     fun():void{
         console.log("...fun")
     }
}


var s1= new Stud("zyy",13);
s1.setNo(20)

//抽象类
abstract class Animal{
    constructor(){

    }
    abstract eat():any;
}

//抽象类型继承类必须实现抽象方法
class Dog extends Animal{
    constructor(){
        super();
    }
    eat() {
        console.log("dog eate bone...");
    }
      
}

new Dog().eat();

//typescript接口**************************
//1.属性接口(属性约定)
interface FullName{
    firstName:string;
    lastName:string;
    ohterName?:string;//可选属性
}
function test(obj:FullName):void{
    console.log(obj.firstName);
}
test({
    "firstName":"xxx",
    "lastName":"zzzz" 
})

interface RequestConfig{
    url:string;
    type:string;
    data?:string;
    dataType:string;
}

function ajax(config:RequestConfig):any{
   var xhr= new XMLHttpRequest();
   xhr.open(config.type,config.url,true);
   xhr.send(config.data);
   xhr.onreadystatechange=function(){
                if(xhr.readyState==4 && xhr.status==200){
                    console.log("success>>>>>>")
                    console.log(xhr.responseText)
                }
   }


}

ajax({
    "url":"http://a.itying.com/api/productlist",
    "type":"get",
    dataType:"json"
});

//函数类型接口：对方法传入的类型以及返回类型进行约束
//sample:
interface encypt{
    (key:string, value:string):string
}
var md5:encypt= function(key:string,val:string):string{
            return key+val;
}

//可索引接口： 对数组,对象的约束
//sample 
interface myAarry{
    [index:number]:string
}
var arary:myAarry =["2","333"]
// 类类型接口；
//sample
interface animal{
    name:string
    eate(str:string):void;
}

class Cat  implements animal {
    constructor(name:string) {
       this.name =name;
    }
    name: string;
    eate(str: string): void {
        console.log(" cat eat......")
    }
}
new Cat("cat").eate("mic");

//泛型
function getData<T>(val:T):T{
    return val;
}
class MinClass<T> {
    add(val:T):T {
        return val
    }
}

namespace A {
//装饰器
function logClass(p:any):void {
    console.info(p);
}
@logClass
class B{
    constructor(){

    }
}
new B();


}





