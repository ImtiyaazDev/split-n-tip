import { useSelector } from "react-redux";
import PriceTag from "./PriceTag";
import SinglePayment from "./SinglePayment";

export default function Payments() {
	const users = useSelector((store) => store.bill.users);
	const tipAmountPerPerson = useSelector(
		(store) => store.bill.tipAmountPerPerson
	);
	const tipAmount = useSelector((store) => store.bill.tipAmount);
	const billAmount = useSelector((store) => store.bill.billAmount);

	return (
		<div className="h-fit space-y-6 rounded-2xl bg-violet-200 p-5">
			<ul>
				{users.map((user) => (
					<SinglePayment
						key={user.id}
						name={user.name}
						amount={user.amount + tipAmountPerPerson}
					/>
				))}
			</ul>
			<div className="flex items-center justify-between">
				<p className="text-2xl font-bold text-violet-800">Total</p>
				<PriceTag amount={tipAmount + billAmount} />
			</div>
		</div>
	);
}
