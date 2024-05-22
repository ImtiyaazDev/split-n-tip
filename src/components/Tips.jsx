import { useState } from "react";
import PriceTag from "./PriceTag";
import { useSelector } from "react-redux";

export default function Tips() {
	const [tipPercent, setTipPercent] = useState(10);
	const billAmount = useSelector((store) => store.bill.billAmount);
	const tipAmount = (tipPercent / 100) * billAmount;
	const users = useSelector((store) => store.bill.users);
	const tipAmountPerPerson = tipAmount / users.length;

	return (
		<div className="flex h-fit flex-col gap-3 rounded-2xl bg-stone-200 p-5">
			<form className="flex items-center justify-between">
				<label className="text-lg font-bold text-stone-700">Tip (%)</label>
				<input
					type="number"
					className="w-20 rounded-full bg-indigo-300 p-3 text-center text-indigo-600 outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					placeholder="5"
					defaultValue={tipPercent}
					onChange={(e) => setTipPercent(Number(e.target.value))}
					min="0"
					max="100"
				/>
			</form>
			<div className="flex items-center justify-between">
				<p className="text-lg font-bold text-stone-700">Tip Amount</p>
				<PriceTag amount={tipAmount} />
			</div>
			<div className="flex items-center justify-between">
				<p className="font-bold text-stone-700">Tip Amount per person</p>
				<PriceTag amount={tipAmountPerPerson} />
			</div>
		</div>
	);
}
