import { formatToTwoDigits } from "../utils/formatToTwoDigits";

export default function PriceTag({ amount }) {
	return (
		<p className="rounded-full bg-violet-300 px-5 py-3 text-violet-600 md:px-6">
			R{formatToTwoDigits(amount)}
		</p>
	);
}
