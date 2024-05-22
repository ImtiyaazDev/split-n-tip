import { useSelector } from "react-redux";

import FriendsList from "./FriendsList";
import PriceTag from "./PriceTag";

export default function FriendMeals() {
	const billAmount = useSelector((store) => store.bill.billAmount);
	const users = useSelector((store) => store.bill.users);

	return (
		<div className="space-y-8 rounded-2xl bg-stone-200 p-5">
			{users.length !== 0 && <FriendsList />}
			<div className="flex items-center justify-between">
				<p className="text-2xl font-bold text-violet-600">Bill Amount</p>
				<PriceTag amount={billAmount} />
			</div>
		</div>
	);
}
