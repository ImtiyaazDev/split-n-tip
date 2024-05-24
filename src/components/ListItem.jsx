import { capitaliseFirstLetter } from "../utils/capitaliseFirstLetter";
import PriceTag from "./PriceTag";
import Text from "./Text";

export default function ListItem({ amount, name, item }) {
	return (
		<li
			className={`flex items-center justify-between border-b py-2.5 ${item === "payment" ? "border-b-violet-300" : "border-b-stone-400"}`}
		>
			<div>
				{item === "payment" ? (
					<Text>{capitaliseFirstLetter(name)} pays</Text>
				) : (
					<Text>
						{name === "" ? <Text>Name</Text> : capitaliseFirstLetter(name)}
					</Text>
				)}
				<p className="text-stone-500">
					{item === "payment" ? "Total cost:" : "The cost of meal:"}
				</p>
			</div>
			<PriceTag amount={amount} />
		</li>
	);
}
