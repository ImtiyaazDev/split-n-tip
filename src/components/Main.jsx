import { useSelector } from "react-redux";

import { getIsModalOpen } from "../slices/modalSlice";
import BillFormModal from "./BillFormModal";
import ButtonGroup from "./ButtonGroup";
import Container from "./Container";
import FriendMeals from "./FriendMeals";
import Heading from "./Heading";
import Payments from "./Payments";
import Tips from "./Tips";

export default function Main() {
	const isOpen = useSelector(getIsModalOpen);

	return (
		<main className="col-span-full flex h-full w-full flex-col gap-6 md:flex-row md:justify-between">
			<Container size="lg">
				<ButtonGroup />
				<Container>
					<Heading type="h2">Bill Amount</Heading>
					<FriendMeals />
				</Container>
			</Container>
			<Container
				size="lg"
				spacer="md:mt-[68px]"
			>
				{isOpen ? (
					<BillFormModal />
				) : (
					<>
						<Container>
							<Heading type="h2">Tips</Heading>
							<Tips />
						</Container>
						<Container>
							<Heading type="h2">Split Payments</Heading>
							<Payments />
						</Container>
					</>
				)}
			</Container>
		</main>
	);
}
