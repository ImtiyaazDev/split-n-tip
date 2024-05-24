import { useSelector } from "react-redux";

import {
	getAllUsers,
	getTipAmount,
	getTipAmountPerPerson,
	getBillAmount
} from "../slices/billSlice";
import ListItem from "./ListItem";
import PriceTag from "./PriceTag";
import Text from "./Text";

export default function Payments() {
	const users = useSelector(getAllUsers);
	const tipAmountPerPerson = useSelector(getTipAmountPerPerson);
	const tipAmount = useSelector(getTipAmount);
	const billAmount = useSelector(getBillAmount);

	return (
		<div className="h-fit min-w-80 space-y-6 rounded-2xl bg-violet-200 p-5">
			{users.length === 0 ? (
				<Text>Add a new payee...</Text>
			) : (
				<>
					<ul className="scrollbar | max-h-56 overflow-y-auto md:max-h-36">
						{users.map((user) => (
							<ListItem
								key={user.id}
								name={user.name}
								amount={user.amount + tipAmountPerPerson}
								item="payment"
							/>
						))}
					</ul>
					<div className="flex items-center justify-between pr-6">
						<Text variant={true}>Total</Text>
						<PriceTag amount={tipAmount + billAmount} />
					</div>
				</>
			)}
		</div>
	);
}
