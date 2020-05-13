import * as classifications from '../constants/classifications.json';


class MatchingEngine {

    constructor(breeds) {
        this.breeds = breeds;
    }

    _computeHeight = range => {
        const values = range.replace(/ /gi, '').split('-');

        if (values.length) {
            return (values.reduce((acc, curr) => parseInt(acc) + parseInt(curr))) / 2;
        }

        return range;
    };

    findAMatch = choices => {
        let matchingBreeds = [];
        const maxHeight = choices.dogSize ? classifications.sizes[choices.dogSize] : 999;
        const temperamentCriteria = [...new Set(
            [
                ...choices.activityLevel ? classifications.activityLevel[choices.activityLevel] : [],
                ...choices.hasChildren ? classifications.childFriendly.yes : [...classifications.childFriendly.yes, classifications.childFriendly.no],
                ...choices.purpose ? classifications.purpose[choices.purpose] : []
            ]
        )];

        matchingBreeds = this.breeds.reduce((matches, breed) => {
            const theseTemperaments = breed.temperament ? breed.temperament.split(',') : [];

            if (breed.height && parseInt(this._computeHeight(breed.height.metric), 10) <= maxHeight) {
                breed.heightMatch = true;
            }

            if ((maxHeight !== 999 && breed.heightMatch) &&
                theseTemperaments.length &&
                theseTemperaments.some(temperament => temperamentCriteria.includes(temperament))) {
                matches.push(breed);
            }

            return matches;
        }, []);

        matchingBreeds.sort((a, b) => a.heightMatch ? -1 : 1);

        matchingBreeds.forEach(breed => console.log(breed));

        return matchingBreeds;
    };
};

export default MatchingEngine;