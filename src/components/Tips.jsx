import PriceTag from "./PriceTag";

export default function Tips() {
	return (
		<div className="row-start-3 row-end-3 flex flex-col gap-3 rounded-2xl bg-stone-200 p-5">
			<form className="flex items-center justify-between">
				<label className="text-lg font-bold text-stone-700">Tip (%)</label>
				<input
					type="number"
					className="w-20 rounded-full bg-indigo-300 p-3 text-center text-indigo-600 outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					placeholder="10%"
					defaultValue="10%"
				/>
			</form>
			<div className="flex items-center justify-between">
				<p className="text-lg font-bold text-stone-700">Tip Amount</p>
				<PriceTag />
			</div>
			<div className="flex items-center justify-between">
				<p className="font-bold text-stone-700">Tip Amount per person</p>
				<PriceTag />
			</div>
		</div>
	);
}
