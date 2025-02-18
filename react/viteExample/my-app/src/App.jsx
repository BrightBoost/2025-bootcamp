import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProfileContainer from './components/ProfileContainer'
import EventAndState from './components/EventAndState'
import SecondExampleState from './components/SecondExampleState'
import './App.css'

function App() {

  return (
    <>
        <ProfileContainer />
        <EventAndState />
        <SecondExampleState />
    </>
  )
}

export default App
