import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/style/nav.css"

const RouterTest = () => (
    <div>
        <div className="nav">
            <Link to="/">热门电影</Link>
            <Link to="/Bpage">美剧</Link>
            <Link to="/Cpage">日本电影</Link>
        </div>
    </div>
)

export default RouterTest;