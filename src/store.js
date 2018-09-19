import { createStore, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"
import ReduxLogger from "redux-logger"
import rootReducer from "reducers"

const middleWares = [ReduxThunk]

if (process.env.NODE_ENV === "development") {
  middleWares.push(ReduxLogger)
}

const store = createStore(rootReducer, applyMiddleware(...middleWares))

export default store
