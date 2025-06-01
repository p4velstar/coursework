import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Profile.css";

export default function Profile({ user, onLogout, onUpdateUser }) {
    const [editing, setEditing] = useState(false);
    const [username, setUsername] = useState(user ? user.username : "");
    const [email, setEmail] = useState(user ? user.email || "" : "");

    useEffect(() => {
        if (user) {
            setUsername(user.username);
            setEmail(user.email || "");
        } else {
            setUsername("");
            setEmail("");
            setEditing(false);
        }
    }, [user]);

    if (!user) {
        return <div>Please log in to view your profile.</div>;
    }

    const handleSave = () => {
        onUpdateUser({ username, email });
        setEditing(false);
    };


    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <div className="profile-info">
                <label>
                    Username:
                    {editing ? (
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    ) : (
                        <span>{username}</span>
                    )}
                </label>

                <label>
                    Email:
                    {editing ? (
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    ) : (
                        <span>{email || "Not set"}</span>
                    )}
                </label>
            </div>

            <div className="profile-buttons">
                {editing ? (
                    <>
                        <button onClick={handleSave} className="btn save-btn">Save</button>
                        <button onClick={() => setEditing(false)} className="btn cancel-btn">Cancel</button>
                    </>
                ) : (
                    <button onClick={() => setEditing(true)} className="btn edit-btn">Edit Profile</button>
                )}

                <button onClick={onLogout} className="btn logout-btn">Logout</button>
            </div>
            {user.purchasedCourses && user.purchasedCourses.length > 0 && (
                <div className="purchased-courses">
                    <h2>Purchased Courses</h2>
                    <ul>
                        {user.purchasedCourses.map(course => (
                            <li key={course.id}>
                                <a href={`/course/${course.id}`}>{course.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
}

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string,
        purchasedCourses: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
            })
        )
    }),
    onLogout: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
};

