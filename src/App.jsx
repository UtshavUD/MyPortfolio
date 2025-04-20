import Navbar from "./components/global/Navbar"
import 'boxicons/css/boxicons.min.css';
import StartPage from "./components/global/StartPage"
import About from "./components/about/About";
import Myprojects from "./components/projects/Myprojects";

export default function App() {
  return (
<div className="bg-yellow-100">
 <Navbar/>
 <StartPage/>
<About/>
<Myprojects/>
 </div>
  )
}