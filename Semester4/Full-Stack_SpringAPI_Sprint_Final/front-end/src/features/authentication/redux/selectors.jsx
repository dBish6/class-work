// Allows us to select a state from the store.
export const selectCurrentUserSession = (store) =>
  store.user.currentUserSession;
export const selectCurrentUser = (store) => store.user.currentUser;
