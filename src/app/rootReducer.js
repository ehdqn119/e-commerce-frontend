import { combineReducers } from '@reduxjs/toolkit'

// Reducers
import attractionSlice from '../features/attraction/attraction-slice'
import flightsSlice from '../features/flights/flights-slice'
import hotelSlice from '../features/hotels/hotel-slice'


// import counterReducer from 'features/counter/counterSlice'
// import todosReducer from 'features/todos/todosSlice'
// import usersReducer from 'features/users/usersSlice'
// import visibilityFilterReducer from 'features/visibilityFilter/filtersSlice'

const rootReducer = combineReducers({
  // State name 은 여기서 정해
  attraction : attractionSlice,
  flights : flightsSlice,
  hotel : hotelSlice,
  
})


// export type RootState = ReturnType<typeof rootReducer>

export default rootReducer