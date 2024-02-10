
import { SET_NAME, TOGGLE_CHECKBOX } from "./actions";

const initalState = {
    showName: false,
    name: "defaulName",
};

export const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX: {
            return {
                ...state,
                showName: !state.showName,
            };
        }
        case SET_NAME: {
            return {
                ...state,
                name: action.payload,
            };
        }
        default:
            return state;
    }
};