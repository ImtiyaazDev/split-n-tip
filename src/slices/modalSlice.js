import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: false
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		showModal: (state, action) => {
			state.isOpen = action.payload;
		}
	}
});

export const { showModal } = modalSlice.actions;
export default modalSlice.reducer;
