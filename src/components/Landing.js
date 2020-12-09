import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
    return <div>
        <h1>Welcome to the site!</h1>
        <Link to="/list">Next Page</Link>
    </div>
}

export default Landing;