import Button from "./Button";

export default function ButtonGroup() {
	return (
		<div className="flex items-start justify-between">
			<Button type="primary">Add Payee</Button>
			<Button type="secondary">New Bill</Button>
		</div>
	);
}
