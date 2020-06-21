import React from 'react'
import ReactDOM from 'react-dom'
//jsx语法
var a=100
const mydiv = <div id='mydiv'>this is div{a+2}</div>

//在大括号中可以放入（类似于VUE的差值表达式）


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
//注意：React中，需要把key添加给被forEach或者map或for循环[直接]控制的元素
arrstr.forEach(element => {
    var temp=<h5 key={item}>{element}</h5>
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
    {arrstr.map(item=><h3 key={item}>{item}</h3>)}
    <hr></hr>
    <p className="myp">122</p> 
    {/* class要改为className，为了防止歧义 */}
    <label htmlFor="ooo">123</label>
    </div>

ReactDOM.render(mydiv,document.getElementById('app'))