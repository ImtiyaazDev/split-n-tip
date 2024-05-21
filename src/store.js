import { configureStore } from "@reduxjs/toolkit";

import billReducer from "./slices/billSlice";
import modalReducer from "./slices/modalSlice";

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		bill: billReducer
	}
});
