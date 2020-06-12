import { PROFILE_CHANGE } from '../constants/index';

const initialState = {
    profile : null
}
    
;

const editReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_CHANGE:
        return {
                ...state,
                profile:action.payload
            };
        default:
            return state;
    }
} 

export default editReducer;