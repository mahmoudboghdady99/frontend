import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import Form from 'react-bootstrap/Form'; // استيراد Form من react-bootstrap



function Courses() {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getAllCourses();
    }, []);

    const getAllCourses = () => {
        fetch('http://localhost:9000/corsses')
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);
            })
            .catch((error) => {
                console.error('Error fetching courses:', error);
            });
    }

    const deletCourse = (course) => {
        Swal.fire({
            title: `Are you sure you want to delete course ${course.Title}?`,
            showCancelButton: true,
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`http://localhost:9000/corsses/${course.id}`, {
                    method: 'DELETE'
                }).then((response) => response.json())
                    .then((data) => {
                        getAllCourses();
                    })
                    .catch((error) => {
                        console.error('Error deleting course:', error);
                    });
            }
        });
    }

    const filteredCourses = courses.filter(course =>
        course.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1>Courses Page</h1>

            <div className="d-flex align-items-center mt-3 justify-content-between">
    <Link to={'/courses/add'} className="btn btn-success me-3">Add New Course</Link>
    <div className="d-flex align-items-center" style={{ marginRight: '25px' }}>
        <Form.Label className="me-2">Search</Form.Label> {/* النص "Search" */}
        <Form.Control
            type="text"
            placeholder="Search courses..."
            style={{ width: '200px' }}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>

</div>
          

            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Course Title</th>
                        <th>Coach's Name</th>
                        <th>Description</th>
                        <th>Price $</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCourses.map((course) => (
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.Title}</td>
                            <td>{course.name}</td>
                            <td>{course.description.slice(0, 5)}..</td>
                            <td>{course.price}</td>
                            <td>
                                <button className="btn btn-danger  me-2" onClick={() => deletCourse(course)}>Delete</button>
                                <Link to={`/coursses/${course.id}`} className="btn btn-info">View</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Courses;