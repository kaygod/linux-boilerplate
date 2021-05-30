import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.css';
import { call } from "./util/common"; 

const Hello = () => {

  const [list,setList] = useState([]);

  const getSystem = async ()=>{
    const data = await call("getSystem") as [];
    setList(data);
  }  

  return (
    <div>
      <button onClick={getSystem}>Click me</button>
      <div>
        {
         list.map((item:[string,string][])=>{
           return (
             <div className="line" key={item[0]}>
               <p className="first-column">{item[0]}:</p>
               <p className="second-column">{item[1]}</p>
             </div>
           )
         })
        }
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
