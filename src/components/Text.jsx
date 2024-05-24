export default function Text({ variant, children }) {
	return (
		<p
			className={`font-bold ${variant ? "text-2xl text-violet-600" : "text-xl text-stone-600"}`}
		>
			{children}
		</p>
	);
}
