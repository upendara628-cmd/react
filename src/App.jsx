import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { data } from './assets/data/data'
import Myclass from './components/list_conn'
import MemberName from './components/membercard'
import StatesDemo from './components/states_in_react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {data.map(person => (
        <MemberName key={person.id} name={person.name} div={person.div} />
      ))}
      <Myclass />
      <hr />
      <StatesDemo />
      
    </>
  )
}

export default App
