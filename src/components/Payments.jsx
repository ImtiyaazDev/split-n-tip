import { useSelector } from "react-redux";
import PriceTag from "./PriceTag";
import SinglePayment from "./SinglePayment";
import Message from "./Message";

export default function Payments() {
	const users = useSelector((store) => store.bill.users);
	const tipAmountPerPerson = useSelector(
		(store) => store.bill.tipAmountPerPerson
	);
	const tipAmount = useSelector((store) => store.bill.tipAmount);
	const billAmount = useSelector((store) => store.bill.billAmount);

	return (
		<div className="h-fit space-y-6 rounded-2xl bg-violet-200 p-5">
			{users.length === 0 ? (
				<Message message="Add a new payee..." />
			) : (
				<>
					<ul className="scrollbar | max-h-56 overflow-y-auto md:max-h-36">
						{users.map((user) => (
							<SinglePayment
								key={user.id}
								name={user.name}
								amount={user.amount + tipAmountPerPerson}
							/>
						))}
					</ul>
					<div className="flex items-center justify-between pr-7">
						<p className="text-2xl font-bold text-violet-600">Total</p>
						<PriceTag amount={tipAmount + billAmount} />
					</div>
				</>
			)}
		</div>
	);
}
