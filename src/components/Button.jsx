export default function Button({ type, onClick, children, disabled }) {
	const base = `rounded-full px-6 py-3 text-lg font-bold outline-none transition-colors duration-300 focus:ring-2 focus:ring-offset-2 ${disabled ? "cursor-not-allowed" : ""}`;

	const styles = {
		primary: `${base} bg-violet-500 text-violet-100 ${disabled ? "" : "hover:bg-violet-600 focus:ring-violet-500"}`,
		secondary: `${base} bg-violet-200 text-violet-700 ${disabled ? "" : "hover:bg-violet-500 hover:text-violet-100 focus:ring-violet-600"}`,
		form: `bg-violet-500 text-violet-100 hover:bg-violet-600 focus:ring-violet-500 rounded-full px-6 py-2 font-bold outline-none transition-colors duration-300 focus:ring-2 focus:ring-offset-2`,
		cancel: `bg-red-500 text-red-100 hover:bg-red-600 focus:ring-red-500 rounded-full px-6 py-2 font-bold outline-none transition-colors duration-300 focus:ring-2 focus:ring-offset-2`
	};

	if (type === "form")
		return (
			<button
				type="submit"
				className={styles[type]}
			>
				{children}
			</button>
		);

	return (
		<button
			className={styles[type]}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
