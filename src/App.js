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
import Masters from "./components/Masters/Masters";
import Profile from "./components/Profile/Profile";


function App() {
    return (
        <>
            <Routes>
                <Route path='/home' element={<Gen/>}/>
                {/*<Route path='/' element={<Gen/>}/>*/}
                {/*<Route path='/' element={<General/>}/>*/}
                {/*<Route path='/' element={<Global/>}/>*/}
                {/*<Route path='/' element={<Globally/>}/>*/}
                <Route path='/school' element={<School/>}/>
                <Route path='/course' element={<Course/>}/>
                <Route path='/about' element={<About/>}/>


                <Route path='/articlese' element={<Articlese/>}/>
                <Route path='/package' element={<Package/>}/>
                <Route path='/checking' element={<Checking/>}/>
                <Route path='/masters' element={<Masters/>}/>
                <Route path='/profile' element={<Profile/>}/>

                {/*<Route path='/articlese' element={<Articlese/>}/>*/}
                {/*<Route path='/package' element={<Package/>}/>*/}
                {/*<Route path='/checking' element={<Checking/>}/>*/}
            </Routes>
        </>
    );
}

export default App;
