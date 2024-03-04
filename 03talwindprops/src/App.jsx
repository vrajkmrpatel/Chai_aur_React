import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1>talwind:</h1>
      <div className='flex flex-wrap justify-center gap-x-5 my-5'>
      <Card devicename = "Mackbook" btnText="Click Me"/>
      <Card devicename = "Asus" btnText='Read Me'/>
      <Card devicename = "Dell" btnText='Click here'/>
      <Card devicename = "HP"/>
      </div>
    </>
  )
}

export default App
