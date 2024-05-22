import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
	users: [],
	billAmount: 0
};

const billSlice = createSlice({
	name: "bill",
	initialState,
	reducers: {
		addUser: (state) => {
			state.users.push({ id: uuidv4(), name: "", amount: 0 });
		},
		updateName: (state, action) => {
			const { id, name } = action.payload;
			const user = state.users.find((user) => user.id === id);
			if (user) user.name = name;
		},
		updateBillAmount: (state, action) => {
			const { id, amount } = action.payload;
			const user = state.users.find((user) => user.id === id);
			if (user) user.amount = parseFloat(amount);
		},
		calculateBillAmount: (state) => {
			state.billAmount = state?.users.reduce(
				(acc, curValue) => acc + curValue.amount,
				0
			);
		},
		removeLastUser: (state) => {
			state.users.pop();
		}
	}
});

export const {
	addUser,
	updateName,
	updateBillAmount,
	calculateBillAmount,
	removeLastUser
} = billSlice.actions;
export default billSlice.reducer;
