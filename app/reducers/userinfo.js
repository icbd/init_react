import {userinfoActionKeys} from "../constants/actionTypes";

const initialState = {};

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        case userinfoActionKeys.USERINFO_UPDATE:
            return action.data;
        default:
            return null;
    }
}