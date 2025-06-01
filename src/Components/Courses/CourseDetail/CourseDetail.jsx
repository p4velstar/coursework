import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './CourseDetail.css';

const CourseDetail = ({ courses }) => {
    const { courseId } = useParams();
    const course = courses.find(c => c.id === parseInt(courseId, 10));

    const user = JSON.parse(localStorage.getItem("user")) || {};
    const hasAccess = course && user.purchasedCourses?.some(c => c.id === course.id);

    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
        if (hasAccess) {
            setIsRegistered(true);
        }
    }, [hasAccess]);

    const handleRegister = () => {
        alert(` You have successfully enrolled in the course: ${course.title}`);
        setIsRegistered(true);

        const updatedUser = {
            ...user,
            purchasedCourses: [...(user.purchasedCourses || []), course],
        };

        localStorage.setItem("user", JSON.stringify(updatedUser));
    };

    if (!course) {
        return <div>Курс не знайдено</div>;
    }

    return (
        <div className="course-detail">
            <img src={course.image} alt={course.title} />
            <div className="course-detail-text">
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <p className="price">Price: ${course.price.toFixed(2)}</p>

                {hasAccess ? (
                    <div className="video-wrapper">
                        <h4> Your course::</h4>
                        <video controls width="640">
                            <source src="#" type="video/mp4" />
                            Your browser does not support video.
                        </video>
                    </div>
                ) : (
                    <button
                        onClick={handleRegister}
                        disabled={isRegistered}
                        className={isRegistered ? 'registered' : ''}
                    >
                        {isRegistered ? ' You\'re enrolled' : 'Sign up for a course'}
                    </button>
                )}
            </div>
        </div>
    );
};

CourseDetail.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CourseDetail;
