import Immutable from "immutable";
import { ADD_COW } from "./actionCreators";
import dummyCows from "js/state/dummyCows";

const runningIdentifier = (() => {
    let currentId = 0;
    return () => `cow-${currentId++}`;
})();

const defaultState = dummyCows.reduce((cowAcc, cow) => {
    const newCowIdentifier = runningIdentifier();
    return Object.assign(cowAcc, {
        [newCowIdentifier]: { ...cow, id: newCowIdentifier },
    });
}, {});

export default function cowReducer(
    state = Immutable.fromJS(defaultState),
    { type, payload }
) {
    switch (type) {
        case ADD_COW: {
            const newCowIdentifier = runningIdentifier();
            return state.set(
                newCowIdentifier,
                Immutable.fromJS({ ...payload, id: newCowIdentifier })
            );
        }
    }

    return state;
}
