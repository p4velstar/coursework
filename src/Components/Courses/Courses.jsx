import { Component } from "react";
import "./Courses.css";

export default class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [
                {
                    id: 1,
                    title: "Introduction to Programming",
                    description: "Learn the basics of programming with Python. No prior experience required.",
                    price: 49.99,
                    image: "./introduction.png"
                },
                {
                    id: 2,
                    title: "Web Development Bootcamp",
                    description: "Become a full-stack web developer with this comprehensive bootcamp.",
                    price: 99.99,
                    image: "./WebDevelop.png"
                },
                {
                    id: 3,
                    title: "Data Science and Machine Learning",
                    description: "Dive into data science and machine learning with hands-on projects.",
                    price: 79.99,
                    image: "./DataScience.png"
                }
            ]
        };
    }

    render() {
        return (
            <div className="courses-container">
                {this.state.courses.map(course => (
                    <div key={course.id} className="course-card">
                        <img src={course.image} alt={course.title} className="course-image" />
                        <h3 className="course-title">{course.title}</h3>
                        <p className="course-description">{course.description}</p>
                        <p className="course-price">Price: ${course.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        );
    }
}