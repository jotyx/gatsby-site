import {createStore} from "redux";

export const SET_ITEM = "SET_ITEM";

const rootReducer = (state, {type, payload}) => {
    switch (type) {
        case SET_ITEM:
            return payload;
        default:
            return state;
    }
};

const store = createStore(rootReducer);

export default store;
