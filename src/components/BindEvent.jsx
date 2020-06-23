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
                    <button onClick={btnClick()}>button</button>
                    </div>
        }
        btnClick(){
            console.log('10');
        }
}