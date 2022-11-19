import Header from '../components/Header';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const beerApiEndpoint = 'https://ih-beers-api2.herokuapp.com/beers/' // A "/"" is added at the end because the individual id comes after


function BeerDetails () {
    const { beerId } = useParams()
    const [beer, setBeer] = useState({})

    useEffect (() => {
        const apiCall = async () => {
            try {
                const res = await axios.get((beerApiEndpoint + beerId))
                setBeer(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        apiCall()
    }, [beerId])

    return (
        <div>
            <Header />

            <div>
                <img className="img-single-beer" src={beer.image_url} alt="beer img" />
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p><strong>Created by: </strong>{beer.contributed_by}</p>
            </div>

        </div>
    )
}

export default BeerDetails;