import React, {useState, useEffect} from 'react'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Routes from './Routes'
import './global.scss'


function App() {
  const [isMobile, setIsMobile] = useState(true)

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024 ? true : false)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {
        isMobile ? (
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', padding: '4rem'}}>Resolução não suportada. Por favor abra o site em um desktop.</div>
        ) : (
          <>
            <Menu />
            <Routes />
            <Footer />
          </>
        )
      }
    </>
  );
}

export default App;
