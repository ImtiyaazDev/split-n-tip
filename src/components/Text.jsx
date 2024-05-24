export default function Text({ variant, children }) {
	return (
		<p
			className={`font-bold ${variant ? "text-xl text-violet-600" : "text-lg text-stone-600"}`}
		>
			{children}
		</p>
	);
}
