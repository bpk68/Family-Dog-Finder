import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

// Data
import {
    StateContext,
    DispatchContext,
    actions,
    createAction
} from '../reducers/index';

// Components
import Layout from '../components/Layout';

// Constants
import ROUTES from '../constants/routes';


export default props => {
    // store
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    // state
    const [showResults, setShowResults] = useState(false);

    const updateAnswer = (answerName, value) => {
        dispatch(createAction(actions.ANSWERS.UPDATE, {
            name: answerName,
            value
        }));
    };

    return (
        <Layout>
            <h1>Search container</h1>

            <div className="search container">

                <p>To start with, let's answer some simple questions to start dog matching</p>

                <h2>Question one:</h2>
                <label htmlFor="ddlActivityLevel">
                    How would you describe your family's activity levels?
                </label>
                <select id="ddlActivityLevel" value={state.answers.activityLevel} onChange={e => updateAnswer('activityLevel', e.target.value)}>
                    <option value="1">Little to no activity</option>
                    <option value="2">We bust a move from time to time, but that's it</option>
                    <option value="3">Moderate - we get out and about on the regular</option>
                    <option value="4">Fairly high - we like to keep active and busy</option>
                    <option value="5">All day, all the time. Like, we love marathons!</option>
                </select>

                <h2>Question two:</h2>
                <label htmlFor="dogSize">
                    Do you have a preferred ideal dog size?
                </label>
                {
                    [
                        'toy',
                        'small',
                        'medium',
                        'large',
                        'no preference'
                    ].map(size => (
                        <>
                            <input
                                type="radio"
                                name="dogSize"
                                value={size}
                                onChange={() => updateAnswer('dogSize', size)}
                                checked={state.answers.dogSize === size}
                            />
                            {size}
                            <br />
                        </>
                    ))
                }

                <h2>Question three:</h2>
                <label htmlFor="hasChildren">
                    Do you have any young children in the family?
                </label>
                {
                    [
                        'yes',
                        'no',
                    ].map(answer => (
                        <>
                            <input
                                type="radio"
                                name="hasChildren"
                                value={answer}
                                onChange={e => updateAnswer('hasChildren', e.target.value === 'yes' ? true : false)}
                                checked={state.answers.hasChildren === (answer === 'yes' ? true : false)}
                            />
                            {answer}
                            <br />
                        </>
                    ))
                }

                <h2>Question four:</h2>
                <label htmlFor="ddlPurpose">
                    What will be the primary role of your new hound?
                </label>
                <select id="ddlPurpose" value={state.answers.purpose} onChange={e => updateAnswer('purpose', e.target.value)}>
                    <option value="general">General family pet</option>
                    <option value="guarding">Guard dog</option>
                    <option value="working">Working, support or assistance dog</option>
                    <option value="companion">Companion</option>
                </select>

                <p>
                    <button onClick={() => setShowResults(true)}>Find my perfect breed!</button>
                </p>

                {
                    showResults &&
                    <Redirect to={ROUTES.RESULTS} />
                }
            </div>
        </Layout>
    );
};