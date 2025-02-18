import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProfileContainer from './components/ProfileContainer'
import EventAndState from './components/EventAndState'
import SecondExampleState from './components/SecondExampleState'
import ConditionalRendering from './components/ConditionalRendering'
import './App.css'
import LoopsRendering from './components/LoopsRendering'
import ProductList from './components/ProductList'

function App() {

  return (
    <>
        <ProfileContainer />
        <EventAndState />
        <SecondExampleState />
        <ConditionalRendering show="true" />
        <ConditionalRendering show="false" />
        <LoopsRendering />
        <ProductList />
    </>
  )
}

export default App
