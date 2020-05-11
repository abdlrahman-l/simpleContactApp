import { PROFILE_CHANGE } from '../constants/index';

export function changeProfile(profile){
    return {
        type: PROFILE_CHANGE,
        payload: profile,
    }
}