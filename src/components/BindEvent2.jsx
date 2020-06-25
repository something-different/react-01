import React from 'react'

export  default class BindEvent extends React.Component{
    constructor(){
        super()
        this.state={
            msg:'hello',
            name:'aaaa'
        }
    }
    render(){
        return <div>
            <button onClick={()=>{this.show('arg1','arg2')}}>button</button>
            <h3>{this.state.msg}</h3>
            <hr></hr>
            {/* 如果只是把文本框value属性绑定到state状态，但是不提供onchange处理函数，这样文本框就会成为只读元素 */}
            {/* 需要提供onchange处理事件 */}
            <input type='text' style={{ width:'100%' }} value={this.state.msg} onChange={ (e)=>{this.txtchange(e)} } ref='txt'></input>
        </div>
    }
    show(arg1,arg2){
        console.log('aaaa'+arg1+arg2)

        // this.state.msg='nihao'
        //直接修改this.state.msg这样无法更新页面中的数据，如果要修改的话要重新利用React.setState()
        //同小程序
        // this.setState({
        //     msg:'nihao~'
        // })
        //在setState中之后把对应的state的状态更新，不会影响其他的数据
        //console.log(this.state.msg);//hello
        //注意此时的setState方法是异步的，
        //如果在调用this.setState之后，想立即拿到最新的state值，需要使用this.setState({},callback)
        this.setState({
            msg:'nihao~'
        },console.log(this.state.msg))//nihao


        //vue v-model双向绑定   
    }
    //数据由UI界面改变组件状态vue->v-model  react->监听onchange事件
    txtchange(e){
        //console.log('change');
        //获取文本框的值
        //1.通过事件参数获取
        //console.log(e.target);//<input type='text' style="width:100%" value='hello' }></input>
        //var value = e.target.value//就是输入框的内容
        //2.通过ref获取
        var value=this.refs.txt.value
        this.setState({
            msg:value
        })
    }
}