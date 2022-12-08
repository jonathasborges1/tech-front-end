import './App.css';
import MobileLayout from 'components/Mobile';
import DesktopLayout from 'components/Desktop';

function App() {
  return (
    isMobile() ? ( <MobileLayout /> ) : ( <DesktopLayout /> )
  );
}

function isMobile() {
  // some js way to detect if user is on a mobile device
  let check = false;
  if( (window.innerWidth <= 600 ) && (window.innerHeight <= 500) ){
    check = true;
  }
  return check;
}

export default App;
