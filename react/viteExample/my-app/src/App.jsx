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
import SignUpForm from './components/SignUpForm'
import DisplayData from './components/DisplayData'

function App() {
  const [confirmation, setConfirmation] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  function handleUserFormSubmit(e, data) {
    e.preventDefault();
    setFormData(data);
    fetch("https://dummyjson.com/products",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    )
      .then(response => response.json())
      .then(() => {
        setConfirmation("Form submitted successfully!");
        setFormData({
          name: "",
          email: ""
      });
      }
      );
    console.log("Form submitted", data);

  }

  return (
    <>
      <SignUpForm formData={formData} onFormSubmit={handleUserFormSubmit} confirmation={confirmation} />
      <DisplayData formData={formData} />
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
