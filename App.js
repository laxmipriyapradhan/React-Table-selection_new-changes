import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './Home'
import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Main from './Main';


function App() {
  return (
    <Router>
    <div className='App'>
    <Navbar/>
    <Routes>   
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/main' element={< Main />}></Route>
          {/* <Route exact path='/main' element={<Main/>}></Route> */}
         
   </Routes>
   
    </div>
</Router>
  );
}
export default App;
