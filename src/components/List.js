import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Landing = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('/api/movies')
        .then(res => {
            setList(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const mappedList = list.map( movie => {
        return <div>
            <h1>{movie.title} is a {movie.quality} movie</h1>
        </div>
    })

    return <div>
        {mappedList}
        <Link to="/">Prev Page</Link>
    </div>
}

export default Landing;