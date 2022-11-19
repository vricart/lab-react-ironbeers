import Header from '../components/Header'
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const newBeerApiEndpoint = 'https://ih-beers-api2.herokuapp.com/beers/new'


function NewBeer () {
    const [newBeerInputs, setNewBeerInputs] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewer_tips: "",
        attenuation_level: 0,
        contributed_by: ""

    }) //empty string for clear fillbox

    const navigate = useNavigate() //redirects to homepage


    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value

        setNewBeerInputs(values => ({...values, [name]: value}))
    }


    const submitHandler = (event) => {
        event.preventDefault()

        const createNewBeer = {
            name: newBeerInputs.name,
            tagline: newBeerInputs.tagline,
            description: newBeerInputs.description,
            first_brewed: newBeerInputs.first_brewed,
            brewer_tips: newBeerInputs.brewer_tips,
            attenuation_level: newBeerInputs.attenuation_level,
            contributed_by: newBeerInputs.contributed_by
        }

        const postNewBeerApi = async () => {
            try {
                const res = await axios.post(newBeerApiEndpoint, createNewBeer)
                console.log(res)
                navigate("/")
            } catch (error) {
                console.log(error)
            }
        }
        postNewBeerApi()
        setNewBeerInputs("")
    }


    


    return (
        <div>
        <Header />
            <h1>New Beer</h1>

                <form className="form-container" onSubmit={submitHandler}>
                    <label>Name</label>
                    <input type="text" name="name" value={newBeerInputs.name} onChange={changeHandler}/>

                    <label>Tagline</label>
                    <input type="text" name="tagline" value={newBeerInputs.tagline} onChange={changeHandler}/>

                    <label>Description</label>
                    <input type="text" name="description" value={newBeerInputs.description} onChange={changeHandler}/>

                    <label>First Brewed</label>
                    <input type="text" name="first_brewed" value={newBeerInputs.first_brewed} onChange={changeHandler}/>

                    <label>Brewer Tips</label>
                    <input type="text" name="brewer_tips" value={newBeerInputs.brewer_tips} onChange={changeHandler}/>

                    <label>Attenuation Level</label>
                    <input type="number" name="attenuation_level" value={newBeerInputs.attenuation_level} onChange={changeHandler}/>

                    <label>Created By</label>
                    <input type="text" name="contributed_by" value={newBeerInputs.contributed_by} onChange={changeHandler}/>

                    <button type="submit">Add New Bear</button>

                </form>

        </div>

    )
}

export default NewBeer;
