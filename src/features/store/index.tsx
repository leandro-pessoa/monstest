// funções
import { configureStore } from "@reduxjs/toolkit";

// reducers
import { appReducer } from "../reducers/app";

export const store = configureStore({
    reducer: appReducer
})

// export de tipos que serão utilizados e só podem ser definidos aqui
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
