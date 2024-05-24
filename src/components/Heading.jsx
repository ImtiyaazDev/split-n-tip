export default function Heading({ type, children }) {
	if (type === "h2") {
		return (
			<h2 className="font-heading text-xl text-stone-700 md:text-2xl">
				{children}
			</h2>
		);
	}

	return (
		<h1 className="animate-glow font-heading text-3xl text-violet-500 md:text-4xl">
			{children}
		</h1>
	);
}
