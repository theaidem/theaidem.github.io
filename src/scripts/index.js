import '../styles/index.css'

import ReactDOM from 'react-dom'
import React from 'react'
import Me from "./components/Me"
import Home from "./components/Home"

let parser = document.createElement('a')
parser.href = window.location.href
console.log(parser.hash);
let page = (parser.hash == '#me') ? <Me/> : <Home/>

ReactDOM.render(page, document.getElementById('stapp'))
