import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	amount: 0
};

const billSlice = createSlice({
	name: "bill",
	initialState,
	reducers: {
		updateName: (state, action) => {
			state.name = action.payload;
		},
		updateBillAmount: (state, action) => {
			state.amount = action.payload;
		}
	}
});

export const { updateName, updateBillAmount } = billSlice.actions;
export default billSlice.reducer;
