import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from 'axios'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function App() {
  const [name,setName] = useState("");
  const [branch,setBranch]= useState("");
  const [section,setSection]=useState("");
  const [roll_no,setRoll_no]=useState(0);
  const [exam_status,setExam_status]=useState(false);

  const submitDetails=()=>{
    Axios.post('http://localhost:2000/controller',{
      name:name,
      branch:branch,
      section:section,
      roll_no:roll_no,
      exam_status:exam_status
    }).then(()=>{
      alert("success");
    })
  }
  const retrieveDetails=()=>{
    Axios.get('http://localhost:2000/controller')
    .then((res)=> {setData(res.data)})
  }

  const uodateData=()=>{
    Axios.patch('http://localhost:2000/controller/$(id)',{
      
    })
}

export default App
