
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Data from './components/db.json'
function App() {
  const [type, setType] = useState([]);
  const [name, setName] = useState([]);
  const [batter, setBatter] = useState([]);
  const [top, setTop] = useState([]);


  useEffect(() => {
    setType(Data);
  }, []);
  const handletype = (id) => {
    const dt = type.filter(x => x.id === id);
    setName(dt)
  }

  const handlename = (id) => {
    const dt = name.filter(x => x.id === id);
    setBatter(dt)

  }

  const handlebatter = (id) => {
    const dt = batter.filter(x => x.id !== id);
    setTop(dt)

  }

  return (

    <div className="App" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>

      <select name="" id="" onChange={(e) => handletype(e.target.value)} style={{ width: "300px", paddin: "20px", margin: "20px", height: "30px" }}>
        <option value="">select type</option>
        {type && type !== undefined ? type.map((item) => {
          return (<>
            <option value={item.id} key={item.id}>{item.type}</option>
          </>)
        }) : "no items"
        }
      </select>


      <select name="" id="" onChange={(e) => handlename(e.target.value)} style={{ width: "300px", paddin: "20px", margin: "20px", height: "30px" }}>
        <option value="">select name</option>
        {name && name !== undefined ? name.map((item) => {
          return (<>
            <option value={item.id} key={item.id}>{item.name}</option>
          </>)
        }) : "no items"
        }
      </select>

      <select name="" id="" onChange={(e) => handlebatter(e.target.value)} style={{ width: "300px", paddin: "20px", margin: "20px", height: "30px" }}>
        <option value="">select batter</option>
        {batter && batter !== undefined ? batter.map((item) => {
          return (<>
            {item.batters.batter.map((item) => {
              return (
                <>
                  <option value={item.id} key={item.id}>{item.type}</option>
                </>
              )
            })}
          </>)
        }) : "no items"
        }
      </select>

      <select name="" id="" style={{ width: "300px", paddin: "20px", margin: "20px", height: "30px" }} >
        <option value="">select topping</option>
        {top && top !== undefined ? top.map((item) => {
          return (<>
            {item.topping.map((item) => {
              return (
                <>
                  <option value={item.id} key={item.id}>{item.type}</option>
                </>
              )
            })}
          </>)
        }) : "no items"
        }

      </select>





    </div>
  );
}

export default App;
