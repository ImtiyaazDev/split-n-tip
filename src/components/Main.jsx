import ButtonGroup from "./ButtonGroup";
import FriendMeals from "./FriendMeals";

export default function Main() {
	return (
		<main className="col-span-full grid h-full w-full grid-rows-4">
			<ButtonGroup />
			<FriendMeals />
			<div>
				<h2>tips</h2>
			</div>
			<div>
				<h2>Payments</h2>
			</div>
		</main>
	);
}
