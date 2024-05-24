import { useDispatch, useSelector } from "react-redux";

import { addUser, resetState, getAllUsers } from "../slices/billSlice";
import { toggleModal, getIsModalOpen } from "../slices/modalSlice";
import Button from "./Button";

export default function ButtonGroup() {
	const isOpen = useSelector(getIsModalOpen);
	const users = useSelector(getAllUsers);
	const dispatch = useDispatch();

	const handleAddUser = () => {
		dispatch(toggleModal(true));
		dispatch(addUser());
	};

	const handleNewBill = () => {
		dispatch(resetState());
		if (isOpen) dispatch(toggleModal(false));
	};

	return (
		<div className="relative row-start-1 row-end-1 flex items-start justify-between">
			<Button
				type="primary"
				onClick={handleAddUser}
				disabled={isOpen}
			>
				Add Payee
			</Button>
			<Button
				type="secondary"
				onClick={handleNewBill}
				disabled={!isOpen && !users.length}
			>
				New Bill
			</Button>
		</div>
	);
}
