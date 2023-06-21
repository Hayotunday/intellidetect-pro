import { useState, useEffect } from "react";
import Image from "next/image";

import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";

const Dropdown = ({
	value,
	inputholder,
	placeholder,
	options,
	onChangeValue,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const selectOption = (opt) => {
		onChangeValue(opt);
		setIsOpen(false);
	};

	return (
		<div className="relative min-w-full flex flex-col">
			<span className="text-black-screen text-sm font-medium">
				{inputholder}
			</span>
			<button
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				type="button"
				className="peer border-2 border-slate-500 peer-active:border-blue-500 peer-active:outline-0 flex flex-row 
				items-center justify-between cursor-pointer w-100 h-12 text-left min-w-full rounded-lg bg-white duration-200 
				border-grey-100 active:outline-0 p-5 text-sm outline outline-0 transition-all focus:border-blue-500 
				focus:outline-0 focus:border-2"
			>
				<label className={value === "" ? "text-slate-500" : "text-base"}>
					{value === "" ? placeholder : value}
				</label>
				<span className="flex items-center">
					{!isOpen ? (
						<AiFillDownCircle size={20} />
					) : (
						<AiFillUpCircle size={20} />
					)}
				</span>
			</button>

			{options.length !== 0 && isOpen && (
				<div
					id="dropdown"
					className="peer absolute top-16 flex flex-col flex-grow z-10 mt-2 max-h-56 whitespace-nowrap min-w-full overflow-visible rounded-lg bg-white sm:text-sm"
				>
					{options.map(({ option }, index) => (
						<div
							key={index}
							onClick={() => selectOption(option)}
							className={
								value === option
									? "text-white bg-blue-500 rounded-md h-11 text-left relative cursor-default select-none py-2 pl-3 pr-9"
									: "text-gray-900 bg-white rounded-md hover:bg-slate-100 h-11 text-left relative cursor-default select-none py-2 pl-3 pr-9"
							}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
