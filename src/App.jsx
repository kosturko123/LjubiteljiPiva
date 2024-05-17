import "../src/styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import Galerija from "./pages/Galerija";
import FriendList from "./components/FriendList";
import SearchBar from "./components/SearchBar";
import {MenuProvider} from "./Contexts/MenuContext"

function App() {
 return(
  <MenuProvider>
  <Router>
    <div className="App">
      <div className="pageContainer">
      <Sidebar />
      <FriendList/>
      <Routes>
        <Route path = "/" element = {<Dashboard/>}/>
        <Route path = "/galerija" element = {<Galerija/>}/>
        <Route path = "/profil" element = {<Profil/>}/>
      </Routes>
      </div>
      <SearchBar/>
    </div>
  </Router>
  </MenuProvider>
 );
}

export default App;
