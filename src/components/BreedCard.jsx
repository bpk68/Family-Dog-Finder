import React, { useEffect, useState } from 'react';

// data 
import DataHandler from '../data/dataHandler';

export default ({ breed }) => {

    const [breedImage, setBreedImage] = useState('https://via.placeholder.com/250');

    useEffect(() => {
        const dataHandler = new DataHandler();

        dataHandler
            .getBreedPicture(breed.id)
            .then(response => {

                try {
                    setBreedImage(response.data[0].url);
                } catch (err) {
                    setBreedImage('https://via.placeholder.com/250');
                    console.warn('image not found for breed: ' + breed.id);
                }
            });
    }, []);

    /*/ -- EXAMPLE RESPONSE FROM API
    
       {
           "bred_for": "Small rodent hunting, lapdog",
           "breed_group": "Toy",
           "height": {
           "imperial": "9 - 11.5",
           "metric": "23 - 29"
           },
           "id": 1,
           "life_span": "10 - 12 years",
           "name": "Affenpinscher",
           "origin": "Germany, France",
           "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
           "weight": {
           "imperial": "6 - 13",
           "metric": "3 - 6"
           }
       },
    
    
       */

    return (
        <div className="" style={{ border: '1px solid #000', margin: '0 0 1em' }}>
            <figure>
                {
                    breedImage &&
                    <img src={breedImage} alt={`a ${breed.name} profile`} />
                }
            </figure>
            <h3>{breed.name}</h3>
            <p>{breed.bred_for}</p>
            <ul>
                <li>life span {breed.life_span}</li>
                <li>from {breed.origin}</li>
                <li>avg. weight {breed.weight.metric}Kgs</li>
                <li>avg. height {breed.height.metric}cm</li>
            </ul>
        </div>
    )
};
