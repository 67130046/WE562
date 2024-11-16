import { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DataContext=createContext();
const data = [
  {id:1, val:'aaaa'}, 
  {id:2, val:'bbbb'},
  {id:3, val:'cccc'}
];

createRoot(document.getElementById('root')).render(
  <DataContext.Provider value={data}>
    <App />
  </DataContext.Provider>,
);
export {DataContext};