import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        bearings: "bronson",
		deck_brand: "Welcome",
		grip_tape: "Mob",
		hardware: "Iron horse",
		price: "180.00",
		trucks: "Independent",
		wheels: "Bones"
    },
    reducers: {
        chooseBearings: (state, action) => { state.bearings = action.payload},
        chooseDeck: (state, action) => { state.deck_brand = action.payload},
        chooseGrip: (state, action) => { state.grip_tape = action.payload},
        chooseHardware: (state, action) => { state.hardware = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseTrucks: (state, action) => { state.trucks = action.payload},
        chooseWheels: (state, action) => { state.wheels = action.payload},
    }
})

// Export reducers
export const reducer = rootSlice.reducer;
export const { chooseBearings, chooseDeck, chooseGrip, chooseHardware, choosePrice, chooseTrucks, chooseWheels } = rootSlice.actions