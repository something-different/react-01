import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import CmtList from './components/BindEvent.jsx'

var mydiv = <div>
    <CmtList></CmtList>
</div>
ReactDOM.render(mydiv,document.getElementById("app"));

