import './App.css';
import Wheel from './components/Wheel';
import background from "./images/inside-out.jpg";
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` , backgroundSize: "cover",height: "100vh",}}>
      <Typography variant="h1" component="h2" style={{color:'white',fontFamily:'IntensaFuente'}}>
  Inside Out Germán
</Typography>;
      <Wheel/>
      
    </div>
  );
}

export default App;
