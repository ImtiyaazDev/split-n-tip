import ButtonGroup from "./ButtonGroup";
import FriendMeals from "./FriendMeals";
import Payments from "./Payments";
import Tips from "./Tips";

export default function Main() {
	return (
		<main className="col-span-full flex h-full w-full flex-col gap-6">
			<ButtonGroup />
			<div className="flex flex-col gap-4">
				<h2 className="font-heading text-2xl text-stone-700">Bill amount</h2>
				<FriendMeals />
			</div>
			<div className="flex flex-col gap-4">
				<h2 className="font-heading text-2xl text-stone-700">Tips</h2>
				<Tips />
			</div>
			<div className="flex flex-col gap-4">
				<h2 className="font-heading text-2xl text-stone-700">Split Payments</h2>
				<Payments />
			</div>
		</main>
	);
}
