import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	updateTipAmount,
	updateTipAmountPerPerson,
	updateTipPercent,
	getTipAmount,
	getTipPercent,
	getTipAmountPerPerson
} from "../slices/billSlice";
import PriceTag from "./PriceTag";
import Text from "./Text";

export default function Tips() {
	const tipPercent = useSelector(getTipPercent);
	const tipAmount = useSelector(getTipAmount);
	const tipAmountPerPerson = useSelector(getTipAmountPerPerson);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(updateTipPercent(e.target.value));
	};

	useEffect(
		function () {
			if (tipPercent) {
				dispatch(updateTipAmount());
				dispatch(updateTipAmountPerPerson());
			}
		},
		[dispatch, tipPercent]
	);

	return (
		<div className="flex h-fit flex-col rounded-2xl bg-stone-200 px-5 py-2.5">
			<form className="flex items-center justify-between border-b border-b-stone-400 py-2.5">
				<Text>Tip (%)</Text>
				<input
					type="number"
					className="w-24 rounded-full bg-violet-300 p-3 text-center text-violet-600 outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
					placeholder="5"
					defaultValue={tipPercent}
					onChange={handleChange}
					min="0"
					max="100"
				/>
			</form>
			<div className="flex items-center justify-between border-b border-b-stone-400 py-2.5">
				<Text>Tip Amount</Text>
				<PriceTag amount={tipAmount} />
			</div>
			<div className="flex items-center justify-between py-2.5">
				<Text>Tip Amount per person</Text>
				<PriceTag amount={tipAmountPerPerson || 0} />
			</div>
		</div>
	);
}
