//1. 导入的时候，接受成员名称必须这么写
import React from 'react'//创建组件、虚拟DOM元素，生命周期
import ReactDom from 'react-dom'//创建好的组件和虚拟DOM放到页面上展示

//2. 创建虚拟DOM元素
//参数一：创建的元素类型，字符串，表示元素名称
//参数二：是一个对象或者null，表示 当前这个DOM元素属性
//参数三：子节点（包括其他虚拟DOM获取文本子节点）
//参数n：其他子节点
//<h1 id='myh1' title='this is a h1'>这是一个h1</h1>
const myh1 = React.createElement('h1',
{
    id:'myh1',
    title:'this is a div',
},
'这是h1')
const mydiv = React.createElement('div',null,'this is div',myh1)

const mydiv = <div id = 'mydiv'>this is div</div>//这是一种JSX语法 JS中包含类似于HTML代码
//这里要安装babel，babel会进行转化，转换成react语言

//3. 使用ReactDOM将虚拟DOM渲染到页面上
//参数一：要渲染的那个虚拟DOM
//参数二：指定页面上的容器(必u须是一个DOM元素)
ReactDom.render(mydiv,document.getElementById('app'))