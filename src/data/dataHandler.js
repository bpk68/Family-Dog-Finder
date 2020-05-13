import axios from 'axios';

// data 
import {
    actions,
    createAction,
} from '../reducers/index';

class DataHandler {

    constructor(dispatch) {
        this.instance = axios.create({
            baseURL: 'https://api.thedogapi.com/v1',
            timeout: 10000,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'x-api-key': '4ecd2b08-12b4-474e-95f0-310390d42417'
            }
        });

        this.dispatch = dispatch;
    }

    getAllBreeds = () => {
        this.dispatch(createAction(actions.BREEDS.GET));

        return this.instance
            .get('/breeds?attach_breed=1')
            .then(response => this.dispatch(createAction(actions.BREEDS.GET_SUCCESS, response.data)))
            .catch(error => this.dispatch(createAction(actions.BREEDS.GET_ERROR, error)));
    };

    getBreedPicture = breedId => {
        return this.instance.get(`/images/search?breed_id=${breedId}`);
    }
}

export default DataHandler;