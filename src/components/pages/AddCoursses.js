import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Swal from "sweetalert2"; // استيراد SweetAlert2

function AddCoursses() {
    const [courseTitle, setCourseTitle] = useState("");
    const [coachName, setCoachName] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [price, setPrice] = useState(0);

    const formSubmit = (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة

        // إنشاء كائن يحتوي على بيانات الكورس
        const courseData = {
            Title: courseTitle,
            name: coachName,
            description: description,
            Duration: duration,
            price: price,
        };

        // إرسال البيانات إلى الـ API
        fetch("http://localhost:9000/corsses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(courseData),
        })
            .then((response) => response.json())
            .then((data) => {
                // عرض رسالة نجاح باستخدام SweetAlert2
                Swal.fire({
                    icon: "success",
                    title: "تم الحفظ بنجاح!",
                    text: "تمت إضافة الكورس بنجاح.",
                    confirmButtonText: "حسنًا",
                });

                // إعادة تعيين الحقول بعد الإرسال الناجح
                setCourseTitle("");
                setCoachName("");
                setDescription("");
                setDuration(0);
                setPrice(0);
            })
            .catch((error) => {
                // عرض رسالة خطأ باستخدام SweetAlert2
                Swal.fire({
                    icon: "error",
                    title: "حدث خطأ!",
                    text: "فشل في إضافة الكورس. يرجى المحاولة مرة أخرى.",
                    confirmButtonText: "حسنًا",
                });
                console.error("Error adding course:", error);
            });
    };

    return (
        <Container>
            <h1 className="text-center my-4">Add Course Page</h1>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Form onSubmit={formSubmit}>
                        {/* حقل عنوان الكورس */}
                        <Form.Group className="mb-3">
                            <Form.Label>Course Title</Form.Label>
                            <Form.Control
                                onChange={(e) => setCourseTitle(e.target.value)}
                                value={courseTitle}
                                type="text"
                                placeholder="Enter title"
                                required
                            />
                        </Form.Group>

                        {/* حقل اسم المدرب */}
                        <Form.Group className="mb-3">
                            <Form.Label>Coach's Name</Form.Label>
                            <Form.Control
                                onChange={(e) => setCoachName(e.target.value)}
                                value={coachName}
                                type="text"
                                placeholder="Enter name"
                                required
                            />
                        </Form.Group>

                        {/* حقل الوصف */}
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                as="textarea"
                                placeholder="Enter description"
                                rows={4}
                                required
                            />
                        </Form.Group>

                        {/* حقل المدة */}
                        <Form.Group className="mb-3">
                            <Form.Label>Duration (in Days)</Form.Label>
                            <Form.Control
                                onChange={(e) => setDuration(e.target.value)}
                                value={duration}
                                type="number"
                                placeholder="Enter duration"
                                required
                            />
                        </Form.Group>

                        {/* حقل السعر */}
                        <Form.Group className="mb-3">
                            <Form.Label>Price ($)</Form.Label>
                            <Form.Control
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                type="number"
                                placeholder="Enter price"
                                required
                            />
                        </Form.Group>

                        {/* زر الإرسال */}
                        <Button variant="primary" type="submit">
                            Add Course
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddCoursses;