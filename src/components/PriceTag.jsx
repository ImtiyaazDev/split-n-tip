export default function PriceTag({ amount }) {
	return (
		<p className="rounded-full bg-indigo-300 px-6 py-3 text-indigo-600">
			R{amount}
		</p>
	);
}
