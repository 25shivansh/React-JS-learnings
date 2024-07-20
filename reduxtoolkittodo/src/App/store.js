import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../functions/todo/todoSlice'

export const store=configureStore({
    reducer:todoReducer
})