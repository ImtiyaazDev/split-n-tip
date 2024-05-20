import ButtonGroup from "./ButtonGroup";
import FriendMeals from "./FriendMeals";
import Payments from "./Payments";
import Tips from "./Tips";

export default function Main() {
	return (
		<main className="col-span-full grid h-full w-full grid-rows-2 gap-y-6">
			<div className="row-start-1 row-end-1 flex h-auto flex-col gap-6">
				<ButtonGroup />
				<div className="flex flex-col gap-4">
					<h2 className="font-heading text-2xl text-stone-700">Bill amount</h2>
					<FriendMeals />
				</div>
			</div>
			<div className="row-start-2 flex flex-col gap-6">
				<div className="flex flex-col gap-4">
					<h2 className="font-heading text-2xl text-stone-700">Tips</h2>
					<Tips />
				</div>
				<div className="flex flex-col gap-4">
					<h2 className="font-heading text-2xl text-stone-700">Split Payments</h2>
					<Payments />
				</div>
			</div>
		</main>
	);
}
