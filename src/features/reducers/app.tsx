// funções
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// tipagem dos states
interface State {
    navDisplay: boolean
}

// declaração inicial dos states
const initialState: State = {
    navDisplay: false
}

// slice, onde conterá o nome do reducer, os states iniciais e as actions, que modificarão os states
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleNavDisplay: (state) => {
            state.navDisplay = !state.navDisplay
        },
        closeNav: (state) => {
            state.navDisplay = false
        }
    }
})

// export do reducer
export const appReducer = appSlice.reducer

// export das actions
export const { toggleNavDisplay, closeNav } = appSlice.actions

// export dos states
export const selectNavDisplay = (state: RootState) => state.navDisplay