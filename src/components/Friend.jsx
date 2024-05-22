import Message from "./Message";
import PriceTag from "./PriceTag";

export default function Friend({ amount, name }) {
	function capitaliseFirstLetter(string) {
		if (!string) return "";
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<li className="flex items-center justify-between border-b border-b-stone-400 py-2.5">
			<div>
				<p className="text-xl font-bold text-stone-700">
					{name === "" ? (
						<Message message="Name" />
					) : (
						capitaliseFirstLetter(name)
					)}
				</p>
				<p className="text-stone-500">The cost of meal:</p>
			</div>
			<PriceTag amount={amount} />
		</li>
	);
}
