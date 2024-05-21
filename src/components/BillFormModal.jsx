import { useState } from "react";
import { useDispatch } from "react-redux";

import { toggleModal } from "../slices/modalSlice";
import { updateBillAmount, updateName } from "../slices/billSlice";
import Button from "./Button";

export default function BillFormModal() {
	const [name, setName] = useState("");
	const [billAmount, setBillAmount] = useState(0);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateName(name));
		dispatch(updateBillAmount(billAmount));
		dispatch(toggleModal(false));
	};

	const handleCancel = () => {
		dispatch(toggleModal(false));
	};

	return (
		<form
			className="col-span-full flex h-2/3 flex-col items-center justify-evenly gap-4 rounded-2xl bg-stone-300 p-5"
			onSubmit={handleSubmit}
		>
			<h2 className="font-heading text-2xl text-stone-700">Billing Details</h2>
			<div className="flex flex-col gap-4">
				<div className="flex items-center justify-between gap-7">
					<label className="text-lg font-bold text-stone-600">Name</label>
					<input
						type="text"
						required
						className="h-8 w-40 rounded-2xl px-4"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="flex items-center justify-between gap-7">
					<label className="text-lg font-bold text-stone-600">Amount</label>
					<input
						type="number"
						required
						className="h-8 w-40 rounded-2xl px-4"
						value={billAmount}
						onChange={(e) => setBillAmount(e.target.value)}
					/>
				</div>
				<div className="flex justify-evenly">
					<Button type="form">Submit</Button>
					<Button
						type="cancel"
						onClick={handleCancel}
					>
						Cancel
					</Button>
				</div>
			</div>
		</form>
	);
}
