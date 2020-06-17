import React from 'react'
import ReactDom from 'react-dom'
const myh1 =  React.createElement('h1',null,'this is a h1');
//const mydiv = React.createElement('div',null,'this is a div',myh1);
const mydiv = <div id='myid'>this is a div</div>
ReactDom.render(mydiv,document.getElementById('app'));