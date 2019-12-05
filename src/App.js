import React, { useState } from 'react';
import './App.css';

function App() {
  const [active, setActive] = useState({})
  const handleChangeColor = evt => {
    setActive({
      active: evt.target.name
    })
  }

  const cores =['pink', 'green' , 'yellow', 'magenta']

  const MyButton = ({ name }) => {
    const styleDefault = { backgroundColor: name, borderColor: '#000', borderRadius: '50px', padding: '2em' }
    const styleSelected = { backgroundColor: name, borderColor: 'yellow', borderRadius: '50px', padding: '3em' }
  
    return <button

     style={active.active === name ? styleSelected : styleDefault}
      
      onClick={handleChangeColor}
      name={name} >
      
    </button>
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Status: {JSON.stringify(active)}</p>
        {
            cores.map(cor=> {
                return (
                  <>
                    <MyButton name={cor} />
                  </>
                )
            })
        }
      </header>
    </div>
  );
}

export default App;