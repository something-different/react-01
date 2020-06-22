import React from 'react'
import ReactDOM from 'react-dom' 



//样式封装
const h1style={color:'red',fontSize:'35px'}

//使用class关键字定义父组件（有自己数据）
export default class CmtList extends React.Component{
    constructor(){
        super()
        this.state={
            ConmentList:[
                {id:1,name:'a',say:'abc'},
                {id:2,name:'b',say:'abca'},
                {id:3,name:'c',say:'abadac'},
                {id:4,name:'d',say:'absdac'},
                {id:5,name:'e',say:'abadadc'},
            ]
        }
    }
    render(){
        // 注意：在JSX中要写行内样式，不能为style设置字符串的值
        // <h1 style="color:red">this is conmentList</h1>
        // 而是应该这么写 style={{color：'red'}}
        // 在行内样式中如果是数值类型则 不用引号包裹；如果是字符串则需要引号包裹
        return <div>
            {/* <h1 style={{color:'red',fontSize:'35px'}}>this is conmentList</h1> */}
            <h1 style={h1style}>this is conmentList</h1>
            {this.state.ConmentList.map(item=><CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}

//样式封装(抽离出大对象)
// const style={
//     item:{border:'1px dashed #AAA',margin:'10px',padding:"10px",boxShadow:"0 0 10px #AAA"},
//     user:{fontSize:'14px'},
//     content:{fontSize:'12px'}
// }
//样式封装（抽离出单独模块）
import style from './Cmtstyle.js'
//使用function构建普通无状态组件(没有自己数据)
function CmtItem(props){
    return <div style={style.item}>
    <h3 style={style.user}>评论人:{props.name}</h3>
    <h5 style={style.content}>评论内容:{props.say}</h5>
</div>
}