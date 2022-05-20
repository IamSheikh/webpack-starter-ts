import { FC, useEffect } from 'react'
import axios from 'axios'
import getFullName from './getFullName'

const App: FC = () => {
  const fullName = getFullName('John', 'Doe')
  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/users').then((res) => {
      console.log(res.data)
    })
  }, [])
  return (
    <div className='container'>
      <h1>Hello World</h1>
      <h3>Your full name is: {fullName}</h3>
      <button className='btn'>Click Me</button>
    </div>
  )
}

export default App
