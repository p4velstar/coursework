import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './CourseDetail.css';

const CourseDetail = ({ courses }) => {
    const { courseId } = useParams();
    const course = courses.find(c => c.id === parseInt(courseId, 10));
    const [isRegistered, setIsRegistered] = useState(false);

    if (!course) return <div>Course not found</div>;

    const handleRegister = () => {
        alert(`Вы успешно записались на курс: ${course.title}`);
        setIsRegistered(true);
    };

    return (
        <div className="course-detail">
            <img src={course.image} alt={course.title} />
            <div className="course-detail-text">
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <p className="price">Price: ${course.price.toFixed(2)}</p>
                <button
                    onClick={handleRegister}
                    disabled={isRegistered}
                    className={isRegistered ? 'registered' : ''}
                >
                    {isRegistered ? 'Вы записаны' : 'Записаться на курс'}
                </button>
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
            image: PropTypes.string.isRequired
        })
    ).isRequired
};

export default CourseDetail;
