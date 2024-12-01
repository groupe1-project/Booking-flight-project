import logo from './logo.svg';
import './App.css';
import TopNavigation from './component/TopNavigation';

import { blue } from '@mui/material/colors';
import AppRoutes from './AppRoutes';


function App() {
  return (
    <div className="App">
      <header class="header">
      {/*<div style ={{minHeight:"10vh",width:'100%', backgroundColor:'rgb(25 118 210 / 55%)'}}></div>
        <TopNavigation />*/}
            <div class="logo">
            <img src="https://th.bing.com/th?id=OIP.nEJjwTcftQYdk4x-mRrrTAHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="Logo" />
            </div>
            <nav>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#flights">Flights</a></li>
                <li><a href="#deals">Deals</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
        
     </header>

     <main>
     <div className='main-body'>
     <div class="hero-text">
        <h1>Discover Your Next Adventure with the Best Flights</h1>
          <p>Book now and explore the world like never before!</p>
</div>
     <AppRoutes/>
     </div>
     </main>
     
     <footer style={{
        backgroundColor: 'rgba(11, 11, 40, 0.55)', 
        color: 'black', 
        padding: '20px 0',
        textAlign: 'center',
        marginTop: '0px'
      }}>
        <div style={{ marginBottom: '50px' }}>
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:support@flightbooking.com" style={{ color: 'white' }}>support@flightbooking.com</a></p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <a href="#terms" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Terms</a>|
          <a href="#privacy" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Privacy</a>
        </div>

        <div>
          <p>&copy; 2024 Flight Booking. All Rights Reserved.</p>
        </div>
</footer>
    </div>
  );
}
export default App;