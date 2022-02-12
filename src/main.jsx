import React from 'react'
import ReactDOM from 'react-dom'
import '../src/assets/css/reset.css'
import '../src/assets/css/body.css'
import '../src/assets/css/root.css'



import HeaderHeader from './components/header'
import Card from './components/Card'
import Sobre from './components/Sobre'
import Projetos from "../src/components/Projetos"
import Footer from "../src/components/Footer"


ReactDOM.render(
  <React.StrictMode>
    <HeaderHeader />
    <Card />
    <Sobre />
    <Projetos />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
