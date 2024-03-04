import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const reactElement = (

  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

const createElement = React.createElement(
  'a',
  {href: "https://www.google.com", target: "_blank"},
  'Click me to visit Google',
)
ReactDOM.createRoot(document.getElementById('root')).render(

  <>
    <App/>
    {createElement}
  </>

);
