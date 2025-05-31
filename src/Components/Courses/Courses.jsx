import { Component } from "react";
import "./Courses.css";

export default class Courses extends Component {
    scroll = (direction) => {
        const { scrollContainer } = this;
        if (scrollContainer) {
            const cardWidth = 320 + 24;
            const scrollAmount = cardWidth * 3;

            scrollContainer.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            courses: [
                {
                    id: 1,
                    title: "Introduction to Programming",
                    description: "Learn the basics of programming with Python. No prior experience required.",
                    price: 48.99,
                    image: "./introduction.png"
                },
                {
                    id: 2,
                    title: "Web Development Bootcamp",
                    description: "Become a full-stack web developer with this comprehensive bootcamp.",
                    price: 39.99,
                    image: "./WebDevelop.png"
                },
                {
                    id: 3,
                    title: "Data Science and Machine Learning",
                    description: "Dive into data science and machine learning with hands-on projects.",
                    price: 78.99,
                    image: "./DataScience.png"
                },
                {
                    id: 4,
                    title: "Mobile App Development",
                    description: "Create your own mobile apps for Android and iOS using React Native.",
                    price: 89.99,
                    image: "./Mobileappdevelopment.jpg"
                },
                {
                    id: 5,
                    title: "Game Development with Unity",
                    description: "Learn how to create games using Unity, one of the most popular game engines.",
                    price: 59.99,
                    image: "./GameDevelopUnity.jpg"
                }
            ]
        };
    }

    render() {
        return (
            <div className="courses-section">
                <h2 className="section-title">Our Courses</h2>
                <div className="courses-wrapper">
                    <button className="arrow left" onClick={() => this.scroll(-1)}>‹</button>
                    <div className="courses-container" ref={(ref) => (this.scrollContainer = ref)}>
                        {this.state.courses.map((course, index) => (
                            <div
                                key={course.id}
                                className="course-card"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    opacity: 0,
                                }}
                            >
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="course-image"
                                    loading="lazy"
                                />
                                <h3 className="course-title">{course.title}</h3>
                                <p className="course-description">{course.description}</p>
                                <p className="course-price">Price: ${course.price.toFixed(2)}</p>
                                <div className="add-to-cart" onClick={() => this.props.onAdd(course)}>+</div>
                            </div>
                        ))}
                    </div>
                    <button className="arrow right" onClick={() => this.scroll(1)}>›</button>
                </div>
            </div>
        );
    }
    addToCart = (course) => {
        const { orders } = this.state;
        const existingOrder = orders.find(order => order.id === course.id);

        if (existingOrder) {
            existingOrder.quantity += 1;
        } else {
            orders.push({ ...course, quantity: 1 });
        }

        this.setState({ orders });
    };
}