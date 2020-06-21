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
class American extends Person{
    constructor(name ,age){
        //问题一：为什么要调用super
        //       答：子类通过extends继承了父类，那么在子类中的constructor必须优先调用super
        //问题二：super是个什么东西
        //       答：super是一个函数，而且是父类的构造器，子类的super就是父类中的constructor的引用
        //super()//undefined
        //问题三：为什么调用super之后，a1实例中的name和age都变成undefined了
        //       答：super是父类的构造器，此时并没有赋值，所以是undefined
        super(name,age)//传参
    }
}
const a1=new American('mary',15)
console.log(a1)
console.log(a1.sayHello());
class Chinese extends Person{
    constructor(name,age,idNumber){
        super(name,age)
        this.idNumber=idNumber//注意：this不能出现在super之前
    }
}
const c1=new Chinese('jack',12,'1234567')
console.log(c1);
console.log(c1.sayHello());