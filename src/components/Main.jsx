import { useSelector } from "react-redux";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

import ButtonGroup from "./ButtonGroup";
import FriendMeals from "./FriendMeals";
import Payments from "./Payments";
import Tips from "./Tips";
import BillFormModal from "./BillFormModal";

export default function Main() {
	const isOpen = useSelector((store) => store.modal.isOpen);

	return (
		<main className="col-span-full flex h-full w-full flex-col gap-6 md:flex-row md:justify-between">
			<div className="flex flex-col gap-4 md:flex md:grow md:flex-col md:gap-4">
				<ButtonGroup />
				<div className="flex flex-col gap-4">
					<h2 className="font-heading text-2xl text-stone-700">Bill amount</h2>
					<FriendMeals />
				</div>
			</div>
			<div className="flex flex-col gap-4 md:flex md:grow md:flex-col md:gap-4">
				<div className="absolute left-64 top-[116px] flex w-fit items-center gap-6 self-end rounded-full bg-violet-500 px-6 py-3 md:static">
					<SunIcon className="size-7 cursor-pointer text-violet-100" />
					<MoonIcon className="size-7 cursor-pointer text-violet-700" />
				</div>
				{isOpen ? (
					<BillFormModal />
				) : (
					<>
						<div className="flex flex-col gap-4">
							<h2 className="font-heading text-2xl text-stone-700">Tips</h2>
							<Tips />
						</div>
						<div className="flex flex-col gap-4">
							<h2 className="font-heading text-2xl text-stone-700">
								Split Payments
							</h2>
							<Payments />
						</div>
					</>
				)}
			</div>
		</main>
	);
}
