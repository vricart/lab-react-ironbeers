import Header from '../components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const beersApiEndpoint = 'https://ih-beers-api2.herokuapp.com/beers';


function Beers () {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            try {
                const res = await axios.get(beersApiEndpoint)
                setBeers(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        apiCall()
    }, [])

    return (
        <div>
        <Header />
            <h1>Iron Beers</h1>
            <ul>
                {beers.map ( beer => {
                    return (
                        <li key={beer._id}>
                            <img className="img-beer" src={beer.image_url} alt="beer img"/>
                            <Link to={`/beers/${beer._id}`}>
                                <h3>{beer.name}</h3>
                            </Link>
                            <p>{beer.tagline}</p>
                            <p><strong>Created by: </strong>{beer.contributed_by}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Beers;