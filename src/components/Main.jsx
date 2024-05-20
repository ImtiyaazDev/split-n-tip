import ButtonGroup from "./ButtonGroup";
import FriendMeals from "./FriendMeals";
import Payments from "./Payments";
import Tips from "./Tips";

export default function Main() {
	return (
		<main className="col-span-full grid h-full w-full grid-rows-2 gap-y-6">
			<div className="flex flex-col gap-6 row-start-1 row-end-1 h-auto">
				<ButtonGroup />
				<FriendMeals />
			</div>
			<div className="flex flex-col gap-6 row-start-2">
				<Tips />
				<Payments />
			</div>
		</main>
	);
}
