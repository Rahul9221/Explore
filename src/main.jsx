import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import UserCard from './Components/ComCard/ComCard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < UserCard username="Rahul Goswami" age = "21" Hobby="Playing Cricket" Skill = "Front-end Developer" Profession = "Transporter" Address ="Surat Gujarat" Pincode =" 394327" Email="rggoswami1418@gmail.com" Contact="6352396878"/>
  </React.StrictMode>,
)
