import logo from './logo.svg';
import './App.scss';

import {Data1} from './data'

function App() {
  return (
    <div className="App">
       {Data1.map((props) => {
         return(
           <div className='item'>
             <div className='icon'>{props.icon}</div>
             <div className='text'>
               <h6>{props.title}</h6>
               <p>{props.description}</p>
             </div>
           </div>
         )
       })}
    </div>
  );
}

export default App;
