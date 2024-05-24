import { useSelector } from "react-redux";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

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
			<Container size="lg">
				<div className="absolute left-64 top-[116px] flex w-fit items-center gap-6 self-end rounded-full bg-violet-500 px-6 py-3 md:static">
					<SunIcon className="size-7 cursor-pointer text-violet-100" />
					<MoonIcon className="size-7 cursor-pointer text-violet-700" />
				</div>
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
