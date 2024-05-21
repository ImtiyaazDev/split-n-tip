import Button from "./Button";

export default function BillFormModal() {
	return (
		<form className="col-span-full flex w-1/2 h-2/3 flex-col items-center justify-evenly gap-4 rounded-2xl bg-stone-300 p-5">
			<h2 className="font-heading text-2xl text-stone-700">Billing Details</h2>
			<div className="flex flex-col gap-4">
				<div className="flex items-center justify-between gap-7">
					<label className="text-lg font-bold text-stone-600">Name</label>
					<input
						type="text"
						required
						className="h-8 w-40 rounded-2xl px-4"
					/>
				</div>
				<div className="flex items-center justify-between gap-7">
					<label className="text-lg font-bold text-stone-600">Amount</label>
					<input
						type="number"
						required
						className="h-8 w-40 rounded-2xl px-4"
					/>
				</div>
				<Button type='form'>Submit</Button>
			</div>
		</form>
	);
}
