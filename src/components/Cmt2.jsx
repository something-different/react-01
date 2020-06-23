import React from 'react'
import ReactDOM from 'react-dom' 

import cssobj from '../css/Cmt.scss'
//不写node_modules
//如果在引用某个包的时候，这个包被安装到node_modules目录中那么可以直接省略这一次目录，直接开始引入
//规定：第三方的样式表都是以.css结尾
//      自己的样式表都是以.scss结尾，这样就不为普通css启用模块化，自己的scss启用模块化
import bootcss from 'bootstrap/dist/css/bootstrap.css'

// console.log(cssobj)
// console.log(bootcss)//此时虽然没有export defualt但是加了module之后就可以有输出
//{title: "_2P2kpZ67rvc0CrpR0DEWIN"}
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
            {/* <h1 className={cssobj.title} className='test'>this is conmentList</h1> */}
            <h1 className={[cssobj.title,'test'].join("")}>this is conmentList</h1>
            <button className='btn btn-primary'>button</button>
            {this.state.ConmentList.map(item=><CmtItem {...item} key={item.id}></CmtItem>)}
            
        </div>
    }
}

//使用function构建普通无状态组件(没有自己数据)
function CmtItem(props){
    return <div className={cssobj.item}>
    <h3 className={cssobj.username}>评论人:{props.name}</h3>
    <h5 className={cssobj.content}>评论内容:{props.say}</h5>
</div>
}