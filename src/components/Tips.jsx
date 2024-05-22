import { useEffect } from "react";
import PriceTag from "./PriceTag";
import { useDispatch, useSelector } from "react-redux";
import {
	updateTipAmount,
	updateTipAmountPerPerson,
	updateTipPercent
} from "../slices/billSlice";

export default function Tips() {
	const tipPercent = useSelector((store) => store.bill.tipPercent);
	const tipAmount = useSelector((store) => store.bill.tipAmount);
	const tipAmountPerPerson = useSelector(
		(store) => store.bill.tipAmountPerPerson
	);
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
		<div className="flex h-fit flex-col gap-4 rounded-2xl bg-stone-200 p-5">
			<form className="flex items-center justify-between">
				<label className="text-xl font-bold text-stone-700">Tip (%)</label>
				<input
					type="number"
					className="w-20 rounded-full bg-violet-300 p-3 text-center text-violet-600 outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
					placeholder="5"
					defaultValue={tipPercent}
					onChange={handleChange}
					min="0"
					max="100"
				/>
			</form>
			<div className="flex items-center justify-between">
				<p className="text-xl font-bold text-stone-700">Tip Amount</p>
				<PriceTag amount={tipAmount} />
			</div>
			<div className="flex items-center justify-between">
				<p className="text-xl font-bold text-stone-700">
					Tip Amount per person
				</p>
				<PriceTag amount={tipAmountPerPerson || 0} />
			</div>
		</div>
	);
}
