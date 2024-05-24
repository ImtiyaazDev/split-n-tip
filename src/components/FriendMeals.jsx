import { useSelector } from "react-redux";

import { getAllUsers, getBillAmount } from "../slices/billSlice";
import FriendsList from "./FriendsList";
import PriceTag from "./PriceTag";
import Text from "./Text";

export default function FriendMeals() {
	const billAmount = useSelector(getBillAmount);
	const users = useSelector(getAllUsers);

	return (
		<div className="space-y-8 rounded-2xl bg-stone-200 p-5">
			{users.length === 0 ? (
				<Text>Add a new payee...</Text>
			) : (
				<>
					<FriendsList />
					<div className="flex items-center justify-between pr-6">
						<Text variant={true}>Bill Amount</Text>
						<PriceTag amount={billAmount} />
					</div>
				</>
			)}
		</div>
	);
}
