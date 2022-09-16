'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const newState = { ...state };
  const nextActions = [];

  for (const key1 of actions) {
    switch (key1.type) {
      case 'addProperties':
        Object.assign(newState, key1.extraData);
        break;

      case 'removeProperties':
        for (const key2 of key1.keysToRemove) {
          delete newState[key2];
        }
        break;

      case 'clear':
        for (const key3 in newState) {
          delete newState[key3];
        }
        break;

      default:
        throw Error('Error');
    }

    nextActions.push({ ...newState });
  }

  return nextActions;
}

module.exports = transformStateWithClones;
