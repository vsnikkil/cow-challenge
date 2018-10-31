import Immutable from "immutable";
import { createSelector } from "reselect";

export const selectCows = createSelector(
    state => state,
    cows => {
        if (cows instanceof Immutable.Map) {
            return cows.toList().toJS();
        } else {
            return cows;
        }
    },
);
