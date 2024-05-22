import PriceTag from "./PriceTag";

export default function SinglePayment({ name, amount }) {
	return (
		<li className="flex items-center justify-between border-b border-b-violet-300 py-2.5">
			<p className="text-lg font-bold text-stone-700">{name} pays</p>
			<PriceTag amount={amount} />
		</li>
	);
}
