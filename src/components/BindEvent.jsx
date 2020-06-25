import React from 'react'

export default class extends React.Component{
        constructor(){
                super()
                this.state={}
        }
        render(){
                return <div>
                    hello~
                    <hr></hr>
                    {/* 在react中有一套自己的事件绑定装置，事件名，小驼峰命名 */}
                    {/* 调用方法不可以加小括号，要是加的话就直接输出内容了 */}
                    {/* btnclick是实例方法需要通过this调用 */}
                    <button onClick={this.btnClick}>button</button>

                    {/* 但是要传参的时候必须要改成这样 */}
                    <button onClick={ ()=>{this.btnClick('aaa')} }>button</button>
                    </div>
        }
        btnClick(a){
            console.log('10');
        }
}