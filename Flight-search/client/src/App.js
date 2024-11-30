import logo from './logo.svg';
import './App.css';
import TopNavigation from './component/TopNavigation';

import { blue } from '@mui/material/colors';
import AppRoutes from './AppRoutes';


function App() {
  return (
    <div className="App">
      <header>
      <div style ={{minHeight:"10vh",width:'100%', backgroundColor:'rgb(25 118 210 / 55%)'}}></div>
        <TopNavigation />
     </header>

     <main>
     <div className='main-body'>
     <h1>Welcome</h1>
     <AppRoutes/>
     </div>
     </main>
     <footer>
        <div style ={{minHeight:"10vh",width:'100%', backgroundColor:'rgb(25 118 210 / 55%)'}}></div>
     </footer>
    </div>
  );
}

export default App;
