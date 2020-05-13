import React, { useState, useEffect, useMemo, useContext } from 'react';

// Data 
import DataHandler from '../data/dataHandler';
import {
    StateContext,
    DispatchContext
} from '../reducers/index';

// Helpers
import MatchingEngine from '../helpers/matchingEngine';

// Components
import Layout from '../components/Layout';
import BreedCard from '../components/BreedCard';


export default props => {

    const state = useContext(StateContext);
    const dataHandler = new DataHandler(useContext(DispatchContext));

    // state
    const [matching, setMatching] = useState(true);

    const matchingBreeds = useMemo(() => {
        let matches = [];
        setMatching(true)

        const matchingEngine = new MatchingEngine(state.breeds.list);

        matches = matchingEngine.findAMatch(state.answers);

        setMatching(false);

        return matches;
    }, [state.breeds.list, state.answers]);

    useEffect(() => {
        dataHandler.getAllBreeds();
        // eslint-disable-next-line
    }, []);

    return (
        <Layout>
            <h1>Da da da daaaa, here are your search results</h1>

            {
                matchingBreeds && matchingBreeds.slice(0, 9).map(breed => <BreedCard key={breed.id} breed={breed} />)
            }

            {
                (state.breeds.isLoading || matching) &&
                <h1>LOADING....</h1>
            }
        </Layout>
    );
};