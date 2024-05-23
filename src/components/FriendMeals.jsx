import { useSelector } from "react-redux";

import FriendsList from "./FriendsList";
import PriceTag from "./PriceTag";
import Message from "./Message";

export default function FriendMeals() {
	const billAmount = useSelector((store) => store.bill.billAmount);
	const users = useSelector((store) => store.bill.users);

	const formatToTwoDigits = (amount) => Number(amount.toFixed(2));

	return (
		<div className="space-y-8 rounded-2xl bg-stone-200 p-5">
			{users.length === 0 ? (
				<Message message="Add a new payee..." />
			) : (
				<>
					<FriendsList />
					<div className="flex items-center justify-between pr-6">
						<p className="text-2xl font-bold text-violet-600">Bill Amount</p>
						<PriceTag amount={formatToTwoDigits(billAmount)} />
					</div>
				</>
			)}
		</div>
	);
}
