import React from 'react';
import { Link } from 'react-router-dom';

const RouterTest = () => (
    <div>
        <div>
            <Link to="/">A</Link>
            <Link to="/Bpage">B</Link>
            <Link to="/Cpage">C</Link>
        </div>
    </div>
)

export default RouterTest;