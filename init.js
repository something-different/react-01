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
    <h3>第一种创建组件的方法-----name={user.name} age={user.age}</h3>
    {/* 直接把组件名称以标签形式，丢在页面上即可 */}
    {/* 组件传递数据 */}
    <Hello name={user.name} age={user.age}></Hello>
    <hr></hr>
    <h3>第二件创建组件的方法-----{...user}</h3>
    <Hello {...user}></Hello>
    <hr></hr>
    <h3>第三件创建组件的方法-----组件抽离出来</h3>
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
