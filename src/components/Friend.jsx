import PriceTag from "./PriceTag";

export default function Friend({amount, name}) {
	return (
		<li className="flex items-center justify-between border-b border-b-stone-400 py-2.5">
			<div>
				<p className="text-xl font-bold text-stone-700">{name}</p>
				<p className="text-stone-500">The cost of meal:</p>
			</div>
			<PriceTag amount={amount} />
		</li>
	);
}
