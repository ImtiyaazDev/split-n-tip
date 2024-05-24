import { formatToTwoDigits } from "../utils/formatToTwoDigits";

export default function PriceTag({ amount }) {
	return (
		<p className="rounded-full bg-violet-300 px-6 py-3 text-violet-600">
			R{formatToTwoDigits(amount)}
		</p>
	);
}
