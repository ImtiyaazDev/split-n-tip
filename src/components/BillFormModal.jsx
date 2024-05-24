import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	updateBillAmount,
	updateName,
	calculateBillAmount,
	removeLastUser,
	getAllUsers
} from "../slices/billSlice";
import { toggleModal } from "../slices/modalSlice";
import Button from "./Button";
import Container from "./Container";
import Heading from "./Heading";
import Input from "./Input";
import Text from "./Text";

export default function BillFormModal() {
	const [name, setName] = useState("");
	const [billAmount, setBillAmount] = useState(0);
	const dispatch = useDispatch();
	const users = useSelector(getAllUsers);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (billAmount <= 0 || !name) return;

		const userId = users.length ? users[users.length - 1].id : null;
		if (userId) {
			dispatch(updateName({ id: userId, name }));
			dispatch(updateBillAmount({ id: userId, amount: billAmount }));
			dispatch(toggleModal(false));
			dispatch(calculateBillAmount());
		}
	};

	const handleCancel = (e) => {
		e.preventDefault();
		dispatch(removeLastUser());
		dispatch(toggleModal(false));
	};

	return (
		<>
			<Heading type="h2">Billing Details</Heading>
			<form
				className="col-span-full flex flex-col items-center justify-evenly gap-4 rounded-2xl bg-stone-200 p-5 md:h-2/5"
				onSubmit={handleSubmit}
			>
				<Container>
					<Container size="md">
						<Text>Name</Text>
						<Input
							type="text"
							value={name}
							handleChange={(e) => setName(e.target.value)}
						/>
					</Container>
					<Container size="md">
						<Text>Amount</Text>
						<Input
							type="number"
							value={billAmount}
							handleChange={(e) => setBillAmount(e.target.value)}
						/>
					</Container>
					{billAmount <= 0 || !name ? (
						<p className="text-wrap text-center text-red-500">
							Please add a name and value
						</p>
					) : (
						<div className="flex justify-evenly">
							<Button
								type="form"
								disabled={billAmount <= 0 || !name}
							>
								Submit
							</Button>
							<Button
								type="cancel"
								onClick={handleCancel}
							>
								Cancel
							</Button>
						</div>
					)}
				</Container>
			</form>
		</>
	);
}
