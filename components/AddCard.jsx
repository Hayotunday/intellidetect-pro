import React from "react";

import { BsFillXSquareFill } from "react-icons/bs";

import Input from "./Input";
import Dropdown from "./Dropdown";

const AddCard = ({
	email,
	setEmail,
	name,
	setName,
	handleClick,
	role,
	setRole,
	handleCancel,
}) => {
	return (
		<div className="h-screen w-screen bg-transparent flex top-1/4 left-1/4 absolute">
			<div className="h-100 w-125 bg-white-smoke flex flex-col items-center justify-between px-10 py-6 rounded-lg shadow-2xl shadow-black">
				<button
					type="button"
					onClick={handleCancel}
					className="w-full flex justify-end"
				>
					<BsFillXSquareFill size={23} className="text-blue-dark" />
				</button>
				<div className="flex flex-col items-start w-full">
					<h1 className="text-left text-black-screen text-xl font-bold">
						Add New User
					</h1>
					<p className="text-left text-black-screen text-sm font-normal">
						Lorem ipsum dolor sit amet consectetur.
					</p>
				</div>
				<div className="mb-7">
					<Input
						inputholder={"Name"}
						onChangeValue={(e) => {
							setName(e.target.value);
						}}
						placeholder={"enter name"}
						type={"name"}
						value={name}
					/>
					<Input
						inputholder={"Email"}
						onChangeValue={(e) => {
							setEmail(e.target.value);
						}}
						placeholder={"enter mail"}
						type={"email"}
						value={email}
					/>
					<Dropdown
						value={role}
						inputholder={"Select Role"}
						placeholder={"select role"}
						options={[{ option: "Admin" }, { option: "User" }]}
						onChangeValue={setRole}
					/>
				</div>
				<button
					onClick={handleClick}
					type="button"
					className="bg-blue-dark text-white text-center p-2 text-sm font-normal rounded-lg"
				>
					Add New
				</button>
			</div>
		</div>
	);
};

export default AddCard;
