//导入时接受成员的名称必须这么写
import React from 'react'//创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟DOM放到页面上展示

//创建虚拟DOM元素
//参数1：创建元素的类型，字符串，表示元素名称
//参数2：是一个对象或者null 表示当前DOM元素的属性
//参数3：子节点（包括虚拟DOM获得的文本节点）
//参数n：其他子节点
const myh1 = React.createElement('h1',null,'this is h1');
const mydiv = React.createElement('div',null,'this is div',myh1);
//挂载到页面中
ReactDOM.render(mydiv,document.getElementById("app"));

//jsx语法
var a=100
const mydiv = <div id='mydiv'>this is div{a+2}</div>

//在大括号中可以放入（类似于VUE的差值表达式）
