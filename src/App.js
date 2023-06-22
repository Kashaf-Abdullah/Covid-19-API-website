
import {BrowserRouter as Router,Routes,Switch,Route} from 'react-router-dom';

import Home from './components/HOME/Home';
import Charts from './components/CHARTS/Charts';
import Navbars from './components/Navbar/Navbars';

function App() {
  return (
  <>

 <Router>
 <Navbars/>

 <Routes>

 <Route path="/" element={<Home/>}></Route>
<Route path="/covidapi" element={<Charts></Charts>}></Route>

</Routes>

 </Router>
  </>);
}
export default App;