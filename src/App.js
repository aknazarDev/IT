import './App.scss';
import {Routes, Route} from "react-router-dom";
import School from "./components/School/School";
import Course from "./components/Course/Course";
import About from "./components/About/About";
import Gen from "./components/Home/Gen";
import General from "./components/School/General";
import Global from "./components/Course/Global";
import Globally from "./components/About/Globally";
import Articlese from "./components/Articlese/Articlese";
import Package from "./components/Package/Package";
import Checking from "./components/Checking/Checking";

import After from "./components/After/After";

import Masters from "./components/Masters/Masters";
import Profile from "./components/Profile/Profile";
import Control from "./components/Control/Control";
import Youtube from "./components/Youtube/Youtube";
import Visa from "./components/Visa/Visa";



function App() {
    return (
        <>
            <Routes>
                <Route path='/home' element={<Gen/>}/>
                <Route path='/' element={<Gen/>}/>
                <Route path='/' element={<General/>}/>
                <Route path='/' element={<Global/>}/>
                <Route path='/' element={<Globally/>}/>
                <Route path='/school' element={<School/>}/>
                <Route path='/course' element={<Course/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/articlese' element={<Articlese/>}/>
                <Route path='/package' element={<Package/>}/>
                <Route path='/checking' element={<Checking/>}/>
                <Route path='/after' element={<After/>}/>
                <Route path='/masters' element={<Masters/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/package' element={<Package/>}/>
                <Route path='/checking' element={<Checking/>}/>
                <Route path='/control' element={<Control/>}/>
                <Route path='/youtube' element={<Youtube/>}/>
                <Route path='/visa' element={<Visa/>}/>
            </Routes>
        </>
    );
}

export default App;
