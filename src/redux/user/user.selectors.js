import { createSelector } from 'reselect';
// Selectors are good for memoization ( cashing );

const selectUser = state => state.user;


// createSelactor take first arg as array of selectors, the second is the order
export const selectCurrentUser = createSelector(
    [selectUser], (user) => user.currentUser

);

