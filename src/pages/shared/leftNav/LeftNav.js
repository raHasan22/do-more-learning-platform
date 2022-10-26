import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://learning-platform-server-side-beryl.vercel.app/courses')
        .then( res => res.json())
        .then( data => setCourses(data));
    }, [])


    return (
        <div>
        <h4 className='p-2'>Course detail</h4>
        <ul className="list-group">
            {
                courses.map(course => <li key={course.id} className ="list-group-item"><Link to={`/courses/${course.id}`} className='text-decoration-none' >{course.name}</Link></li>)
            }
            
        </ul>
        </div>
    );
};

export default LeftNav;