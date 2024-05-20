import FriendsList from "./FriendsList";
import PriceTag from "./PriceTag";

export default function FriendMeals() {
	return (
		<div className="row-start-2 row-end-2 space-y-8 p-5 bg-stone-200 rounded-2xl">
			<FriendsList />
			<div className="flex items-center justify-between">
				<p className="text-2xl font-bold text-indigo-600">Bill Amount</p>
				<PriceTag />
			</div>
		</div>
	);
}
