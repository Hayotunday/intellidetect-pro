import { useState } from "react";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Input = ({
	value,
	placeholder,
	inputholder,
	type,
	onChangeValue,
	secureText,
}) => {
	const [show, setShow] = useState(secureText);

	return (
		<label className="">
			<span className="text-black-screen text-sm font-medium">
				{inputholder}
			</span>
			<div className="relative">
				<input
					autoComplete="on"
					type={!show ? type : "password"}
					value={value === null ? "" : value}
					placeholder={placeholder}
					className="bg-white h-12 w-100 border-2 border-slate-500 rounded-lg active:border-blue-500 focus:border-blue-500 placeholder:text-sm placeholder:text-slate-500 active:outline-0 focus:outline-0 p-5"
					onChange={onChangeValue}
				/>
				{secureText && (
					<button
						className="absolute top-3.5 right-5"
						type="button"
						onClick={() => {
							setShow(!show);
						}}
					>
						{!show ? (
							<AiOutlineEyeInvisible size={20} className="" />
						) : (
							<AiOutlineEye size={20} className="" />
						)}
					</button>
				)}
			</div>
		</label>
	);
};

export default Input;
