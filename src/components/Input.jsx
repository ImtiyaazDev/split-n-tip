export default function Input({ type, value, handleChange }) {
	return (
		<input
			required
			className="h-8 w-40 rounded-2xl px-4 outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
			type={type}
			value={value}
			onChange={handleChange}
		/>
	);
}
