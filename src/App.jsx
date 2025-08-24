import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Opening from './components/Opening'

function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isSplashVisible ? (
        <Opening />   // show splash only
      ) : (
        <Home />      // show Home (with Player) only after splash ends
      )}
    </>
  )
}

export default App;
