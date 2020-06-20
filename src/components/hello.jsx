//必须得导入react包
import React from 'react'

export default function Hello(props){
    var div=<div>this is {props.name}-----{props.age}</div>
    return div;
}

//暴露组件
//export default Hello;
