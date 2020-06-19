import React from 'react'
import ReactDOM from 'react-dom'



var a=100
var b=true
var title='999'
var h1=<h1>hahahhahaah</h1>//
var h1arr=[
    <h1>this is h1</h1>,
    <h2>this is h2</h2>
]
var arrstr=['a','b','c','d']
//定义一个空数组 存放名称标签[plan A]
var namearr=[]
arrstr.forEach(element => {
    var temp=<h5>{element}</h5>
    namearr.push(temp)
});
const mydiv = <div id='mydiv'>
    this is div{a+2}{/*渲染数字*/}
    <hr />
    {b.toString()}{/*渲染布尔值*/}
    {b?'true':'false'}
    <hr />
    <p id={title}>hahahah</p>{/*为属性绑定值*/}
    <hr />
    {h1}  {/*渲染JSX元素*/}
    <hr></hr>
    {h1arr}  {/*渲染JSX元素数组*/}
    <hr></hr>
    {/*将普通字符数组转为JSX数组并渲染到页面上[两种方案]*/}
    {namearr}{/*方法一*/}
    <hr></hr>{/* 方法二 */}
    {arrstr.map(item=><h3>{item}</h3>)}
    </div>
//什么情况下需要使用{}，当我们需要在JSX控制区域内，写JS表达式，则需要JS代码写在{}中
ReactDOM.render(mydiv,document.getElementById("app"));

