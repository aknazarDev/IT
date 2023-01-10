import './App.scss';
import {Routes, Route} from "react-router-dom";
import School from "./components/School/School";
import Course from "./components/Course/Course";
import About from "./components/About/About";
import Gen from "./components/Home/Gen";
import General from "./components/School/General";
import Global from "./components/Course/Global";
import Globally from "./components/About/Globally";


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Gen/>} />
                <Route path='/' element={<General/>} />
                <Route path='/' element={<Global/>} />
                <Route path='/' element={<Globally/>} />
                <Route path='/school' element={<School/>}/>
                <Route path='/course' element={<Course/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </>
    );
}

export default App;
