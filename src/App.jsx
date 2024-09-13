import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>      <NavBar />
    {/* Último div centrado usando Flexbox */}
    <div className="center-content">
        <h1>Welcome to my page!</h1>
        <p>Today is Wednesday, September 11, 2024.</p>
        <button className="btn btn-primary" onClick={() => console.log("Like")}>
          Like
        </button>
      </div>

    </>
  )
}

export default App
