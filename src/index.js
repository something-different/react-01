import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//import './06.创建组件的第二种方法.js'

//第一种创建组件和第二种创建组件对比：
//使用class 关键字 创建的组件，有自己的私有数据和生命周期函数；
//使用function创建的 组件只有props，没有自己的私有数据和生命周期函数
//基本结构
//用class定义组件必须让自己组件继承自React.Component
class Movie extends React.Component{
    //构造器
    constructor(){
        //由于movie组件继承了React.Component这个父类，所以自定义的构造器中必须调用super()
        super()
        //只有调用了super后才可以使用this
        this.state={
            msg:'hello class,movie'
        }//类似于VUE中的data中的return
        //数据可读可写
    }
    //在组件内部必须有render函数,作用是渲染组件对应的虚拟DOM
    //是class的实例方法
    render(){
    //render函数中必须有JSX返回的虚拟DOM结构
    //return <div>this is div</div>


    //在class关键字创建的组件中，如果想使用外界传递过来的props参数，不需要接受，直接通过this.props.XXX接受即可
    // 注意这里的this指的是实例对象
    // 这里通过props进行传参
    //这里的props都是只读的，不能重新赋值

    this.state.msg='change msg'
    return <div>
        this is classdiv ----{this.props.name}-----{this.props.age}
        <h3>{this.state.msg}</h3> 
        {/* 通过state获取组件中的私有数据，并且数据可读可写 */}
        </div>
    }
}
const user = {
    name:'abc',
    age:12,
    number:1
}
var mydiv=<div>
    this is div
    {/* 这里的movie标签，就相当于movie的一个实例对象 */}
    <Movie {...user}></Movie>
</div>


ReactDOM.render(mydiv,document.getElementById("app"));

