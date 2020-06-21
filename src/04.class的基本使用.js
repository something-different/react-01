function Preson(name,age){
    this.name=name;
    this.age=age;
}
Preson.info='abc'
//静态方法
Preson.show=function(){
    console.log('这是person的静态方法')
}
//实例方法
Preson.prototype.say=function(){
    console.log('preson的实例方法')
}
const p1=new Preson('abc',18);
//构造函数new出来的实例，可以访问到的属性叫做【实例属性】
console.log(p1);
//静态属性，通过构造函数直接访问到的属性，叫做静态属性
console.log(p1.info)//undefined
//原因：由于info直接挂载到了构造函数中，无法通过实例获取
console.log(Preson.info)//abc   通过构造函数获取，静态属性
p1.say()
p1.show()//error
Preson.show()//静态方法挂载在构造函数中


//class 关键字创建
//class中的{}只能写构造器、静态方法、实例方法、静态属性
//class 语法糖 但是内部和构造函数相同
class Animal{
    //构造器
    //每一个类中都有一个构造器，如果没有手动指定构造器，那么认为内部有个隐形构造器
    //作用：每当new这个类的时候，必先优先执行构造器的代码 类似于构造函数
    constructor(name,age){
        this.name=name
        this.age=age
    }
    //在class内部通static修饰的属性，就是静态属性
    //static info='abc'//静态属性  
    scream(){
        //实例方法 挂载到原型对象上的方法
        console.log('这是实例方法')
    }
    // static show(){
    //     //静态方法
    //     console.log('这是静态方法')
    // }
}
const a1=new Animal('aaa',3);
//构造器中的属性也叫做实例属性
console.log(a1.age)//实例属性
// console.log(Animal.info)//静态属性