const initialState = 0; // Initialize the totalBatteries to 0

// Reducer function
function batteryReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BATTERIES':
      // Update the totalBatteries by adding the value of the new ones
      return state + action.payload;
    default:
      return state;
  }
}

// Your array of battery batches
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Calculate the total number of batteries using the reducer
const totalBatteries = batteryBatches.reduce((state, batch) => {
  return batteryReducer(state, { type: 'ADD_BATTERIES', payload: batch });
}, initialState);

console.log(totalBatteries); // Output: 31