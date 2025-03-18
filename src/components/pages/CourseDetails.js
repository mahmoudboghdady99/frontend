import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // تأكد من استيراد useParams من react-router-dom

function CourseDetails() {
    const [course, setCourse] = useState(null); // Initialize as null
    let { courseID } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9000/corsses/${courseID}`)
            .then(response => response.json())
            .then(course => setCourse(course))
            .catch((error) => {
                console.error('Error fetching course details:', error);
            });
    }, [courseID]); // Add courseID as a dependency

    if (!course) {
        return <div>Loading...</div>; // Display a loading message while fetching data
    }

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h2>course Title: {course.Title}</h2>
                </div>
                <div className="card-body">
                    <p><strong>course Title:</strong> {course.Title}</p>
                    <p><strong>Coach's Name:</strong> {course.name}</p>
                    <p><strong>Description:</strong> {course.description}</p>
                    <p><strong>Price:</strong> ${course.price}</p>
                </div>
              
            </div>
        </div>
    );
}

export default CourseDetails;