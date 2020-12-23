"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.info("Hello ts");
var str = "2123";
var str2 = "2312";
//2typeScript 的基本类型有
/**
 * bolean ,number, string,array,tuple, enum, any,null,undefined, void,null,never
 *
 */
var flag = true;
var a = 1;
var str3 = '1';
var arr = [1, 2, 3];
console.log(arr);
//第二种数组定义
var arr2 = [1, 2];
//元组类型
var tuple = ["1", 2];
//枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["failed"] = -1] = "failed";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log(Flag.success);
console.log(f);
var n1;
console.log(n1);
function run() {
    console.log("run...");
}
//函数声明
function run2() {
    return "hhhh";
}
//匿名函数
var fun2 = function () {
    return "";
};
function getInfo(name, age) {
    return name + "--->" + age;
}
// 3.2 可选参数 必须放在最后
function getInfo2(name, age) {
    return "" + name;
}
//默认参数
function getInfo3(name, age) {
    if (age === void 0) { age = 2; }
    return "";
}
//剩余参数
function sum() {
    var reulst = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        reulst[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < reulst.length; i++) {
        sum = sum + reulst[i];
    }
    return sum;
}
// 2.4 ts 函数重载
// function getInfo(name:number,age:number,type:string): any{
//     return "1111";
// }
//类
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 0;
        this.name = n;
    }
    Person.prototype.setAage = function (age) {
        this.age = age;
    };
    Person.prototype.fun = function () {
    };
    return Person;
}());
//ts继承
var Stud = /** @class */ (function (_super) {
    __extends(Stud, _super);
    function Stud(n, no) {
        var _this = _super.call(this, n) || this;
        _this.score = 99;
        _this.no = no;
        return _this;
    }
    Stud.prototype.setNo = function (no) {
        this.no = no;
    };
    Stud.print = function () {
        console.log(this.name);
    };
    Stud.prototype.fun = function () {
        console.log("...fun");
    };
    return Stud;
}(Person));
var s1 = new Stud("zyy", 13);
s1.setNo(20);
//抽象类
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
//抽象类型继承类必须实现抽象方法
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this) || this;
    }
    Dog.prototype.eat = function () {
        console.log("dog eate bone...");
    };
    return Dog;
}(Animal));
new Dog().eat();
function test(obj) {
    console.log(obj.firstName);
}
test({
    "firstName": "xxx",
    "lastName": "zzzz"
});
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("success>>>>>>");
            console.log(xhr.responseText);
        }
    };
}
ajax({
    "url": "http://a.itying.com/api/productlist",
    "type": "get",
    dataType: "json"
});
var md5 = function (key, val) {
    return key + val;
};
var arary = ["2", "333"];
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.eate = function (str) {
        console.log(" cat eat......");
    };
    return Cat;
}());
new Cat("cat").eate("mic");
