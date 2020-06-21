class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    sayHello(){
        console.log("你好~")
    }
}
//在class类中可以使用extends进行继承
//语法class 子类 extends 父类
class Chinese extends Person{
    
}
const c1=new Chinese('jack',12)
console.log(c1);
console.log(c1.sayHello());