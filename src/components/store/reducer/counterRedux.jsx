import * as actionType from '../actions/actionType'

const Istate = {
    counter: 0
}
const CounterReducer = (state = Istate, action) => {
    let newstate = {};
    newstate = {...state };
    switch (action.type) {

        case actionType.INCREMENT:
            newstate.counter += 1;
            return newstate;

        case actionType.DECREMENT:
            newstate.counter -= 1;
            return newstate;


        default:
            return state;

    }



}
export default CounterReducer;