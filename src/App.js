
import './App.css';
import Navbar from './components/Navbar'; // Import Navbar component
import Sidbar from './components/Sidbar'; // Import Sidebar component
import { Routes, Route } from'react-router-dom'; // Import necessary components from react-router-dom
import Home from './components/pages/Home';
import Coursses from './components/pages/Coursses';
import AddCoursses from './components/pages/AddCoursses';
import CourseDetails from './components/pages/CourseDetails';

function App() {
  return (
    <div className="App">
     <Navbar />
     <div className='row'>
      <div className='col-2 sidebar' >
        <Sidbar />
      </div>
      <div className='col-10'>
        <Routes >
           <Route path="/" element={<Home />} />
           <Route path="coursses" element={<Coursses />} />
           <Route path="courses/add" element={<AddCoursses />} />
           <Route path="coursses/:courseID" element={<CourseDetails />} />
        </Routes>
         </div>
      </div>
    </div>
  );
}

export default App;
