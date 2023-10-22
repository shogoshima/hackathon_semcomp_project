import RoutesPage from './Routes'
import { useEffect } from 'react';
import './App.css'

function App() {
  useEffect(() => {
    let data = localStorage.getItem('gotemham')
    if (!data) {
      localStorage.setItem('gotemham', JSON.stringify({ list: [] }))
    }
  }, []);
  return (
    <div className='bg-[#F5F5FA] h-screen w-full'>
      <RoutesPage/>
    </div>
  )
}

export default App