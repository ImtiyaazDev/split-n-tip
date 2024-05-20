import ButtonGroup from "./ButtonGroup";
import FriendMeals from "./FriendMeals";
import Payments from "./Payments";
import Tips from "./Tips";

export default function Main() {
	return (
		<main className="col-span-full grid h-full w-full grid-rows-4 gap-y-6">
			<ButtonGroup />
			<FriendMeals />
			<Tips />
			<Payments />
		</main>
	);
}
