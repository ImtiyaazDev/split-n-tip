import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../slices/modalSlice";
import { addUser, removeAllUsers } from "../slices/billSlice";
import Button from "./Button";

export default function ButtonGroup() {
	const isOpen = useSelector((store) => store.modal.isOpen);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(toggleModal(true));
		dispatch(addUser());
	};

	const handleNewBill = () => {
		dispatch(removeAllUsers());
		if (isOpen) dispatch(toggleModal(false));
	};

	return (
		<div className="relative row-start-1 row-end-1 flex items-start justify-between">
			<Button
				type="primary"
				onClick={handleClick}
			>
				Add Payee
			</Button>
			<Button
				type="secondary"
				onClick={handleNewBill}
			>
				New Bill
			</Button>
		</div>
	);
}
