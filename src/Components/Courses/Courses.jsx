import "./Courses.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Courses({ courses, onAdd }) {
    const navigate = useNavigate();

    const scroll = (direction) => {
        const scrollContainer = document.querySelector(".courses-container");
        if (scrollContainer) {
            const cardWidth = 320 + 24;
            const scrollAmount = cardWidth * 3;
            scrollContainer.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="courses-section">
            <h2 className="section-title">Our Courses</h2>
            <div className="courses-wrapper">
                <button className="arrow left" onClick={() => scroll(-1)}>‹</button>
                <div className="courses-container">
                    {courses.map((course, index) => (
                        <div
                            key={course.id}
                            className="course-card"
                            style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
                            onClick={() => navigate(`/course/${course.id}`)}
                        >
                            <img src={course.image} alt={course.title} className="course-image" />
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-description">{course.description}</p>
                            <p className="course-price">Price: ${course.price.toFixed(2)}</p>
                            <div
                                className="add-to-cart"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onAdd(course);
                                }}
                            >
                                +
                            </div>
                        </div>
                    ))}
                </div>
                <button className="arrow right" onClick={() => scroll(1)}>›</button>
            </div>
        </div>
    );
}

Courses.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired
        })
    ).isRequired,
    onAdd: PropTypes.func.isRequired
};
