import { combineReducers } from "@reduxjs/toolkit";
import items from './items/itemsReducer'


const contactsReducer = combineReducers({
        items,
})

export default contactsReducer