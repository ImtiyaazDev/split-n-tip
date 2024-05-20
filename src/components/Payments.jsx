import PriceTag from "./PriceTag";

export default function Payments() {
	return (
		<div className="h-fit space-y-6 rounded-2xl bg-violet-200 p-5">
			<div className="flex items-center justify-between border-b border-b-violet-300 py-2.5">
				<p className="text-lg font-bold text-stone-700">Imtiyaaz pays</p>
				<PriceTag />
			</div>
			<div className="flex items-center justify-between">
				<p className="text-xl font-bold text-violet-800">Total</p>
				<PriceTag />
			</div>
		</div>
	);
}
