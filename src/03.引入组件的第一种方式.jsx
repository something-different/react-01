import React from 'react'
import ReactDOM from 'react-dom'
// 第一种创建组件的方式（首字母大写）
//构造函数形参接收数据
function Hello(props){
    //返回null表示什么都不渲染
    //return null

    //return一个合法的JSX表示虚拟DOM元素
    var h1=<h1>this is h1</h1>

    //这里必须把内容传过来，props接受参数进行输出[props是只读的]
    //结论:VUE和react组价中的props永远是只读的
    var div=<div>this is {props.name}-----{props.age}</div>
    return div;
}

const user = {
    name:'abc',
    age:18
}
var mydiv=<div>
    124
    <h3>创建组件的传参方法</h3>
    {/* 直接把组件名称以标签形式，丢在页面上即可 */}
    {/* 组件传递数据 */}
    <Hello name={user.name} age={user.age}></Hello>
    <hr></hr>
    <h3>创建组件的传参方法</h3>
    <Hello {...user}></Hello>
    <hr></hr>
    <h3>创建组件的方法-----组件抽离出来</h3>
    </div>


//（引入外部文件）
//import Hello from './components/hello.jsx'

//这里的@符号表示根目录中的src
import Hello from '@/components/hello.jsx'//通过alias进行配置根目录



const user = {
    name:'abc',
    age:18
}
var mydiv=<div>
    124
    {/* 直接把组件名称以标签形式，丢在页面上即可 */}
    {/* 组件传递数据 */}
    {/* <Hello name={user.name} age={user.age}></Hello> */}
    <hr></hr>
    <h3>创建组件的传参方法</h3>
    <Hello {...user}></Hello>
    </div>



//什么情况下需要使用{}，当我们需要在JSX控制区域内，写JS表达式，则需要JS代码写在{}中
ReactDOM.render(mydiv,document.getElementById("app"));