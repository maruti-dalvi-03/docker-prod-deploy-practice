
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(null)

useEffect(() => {
  fetch('http://localhost:4000/api/message')
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
    .catch(err => {
      console.error('Error fetching data:', err)
    })
}, [])  

  return (
    <>
      <h3>Frontend Setup</h3>

      {data && <p>{data.message}</p>}
    </>
  )
}

export default App
