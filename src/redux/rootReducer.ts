import { combineReducers } from "redux"
import { AppReducer } from "../App/redux/AppReducer"

export default combineReducers({
    app: AppReducer,
})
