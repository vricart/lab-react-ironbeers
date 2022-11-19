import Header from '../components/Header';
import axios from "axios";
import { useState, useEffect } from 'react';

const randomBeerApiEndpoint = 'https://ih-beers-api2.herokuapp.com/beers/random'


function RandomBeers () {
    const [randomBeer, setRandomBeer] = useState({})

    useEffect(() => {
        const apiCall = async () => {
            try {
                const res = await axios.get(randomBeerApiEndpoint)
                console.log(res)
                setRandomBeer(res.data)
            } catch (error) {
                console.log(error)
            } 
        }
        apiCall()
    }, [])

    return (
        <div>
        <Header />
        <div>
                <img className="img-single-beer" src={randomBeer.image_url} alt="beer img" />
                <h1>{randomBeer.name}</h1>
                <p>{randomBeer.tagline}</p>
                <p>{randomBeer.first_brewed}</p>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <p><strong>Created by: </strong>{randomBeer.contributed_by}</p>
            </div>
        </div>
    )
}

export default RandomBeers;