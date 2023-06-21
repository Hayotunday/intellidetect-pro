import React from "react";

import { BsFillXSquareFill } from "react-icons/bs";

import Input from "./Input";
import Dropdown from "./Dropdown";

const EditCard = ({
	email,
	setEmail,
	handleClick,
	role,
	setRole,
	status,
	setStatus,
	handleCancel,
}) => {
	return (
		<div className="h-screen w-screen bg-transparent flex top-1/4 left-1/4 absolute">
			<div className="h-96 w-125 bg-white-smoke flex flex-col items-center justify-between px-12 py-8 rounded-lg shadow-2xl shadow-black">
				<button
					type="button"
					onClick={handleCancel}
					className="w-full flex justify-end"
				>
					<BsFillXSquareFill size={23} className="text-blue-dark" />
				</button>
				<div className="flex flex-col items-start w-full">
					<h1 className="text-left text-black-screen text-xl font-bold">
						Edit User
					</h1>
					<p className="text-left text-black-screen text-sm font-normal">
						Lorem ipsum dolor sit amet consectetur.
					</p>
				</div>
				<div className="mb-7 flex flex-col gap-2">
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

					<div className="flex flex-col w-full">
						<span className="text-black-screen text-sm font-medium">
							Status
						</span>
						<div className="flex flex-row w-full gap-5 items-center mx-7">
							<div className="flex flex-row items-center gap-3">
								<input
									type="radio"
									value="Active"
									onChange={(e) => {
										setStatus(e.target.value);
									}}
									className="accent-black"
									checked={status === "Active"}
								/>
								<span className="text-base font-medium">Active</span>
							</div>
							<div className="flex flex-row items-center gap-3">
								<input
									type="radio"
									value="Suspend"
									onChange={(e) => {
										setStatus(e.target.value);
									}}
									className="accent-black"
									checked={status === "Suspend"}
								/>
								<span className="text-base font-medium">Suspend</span>
							</div>
						</div>
					</div>
				</div>
				<button
					onClick={handleClick}
					type="button"
					className="bg-blue-dark text-white text-center p-2 text-sm font-normal rounded-lg"
				>
					Update
				</button>
			</div>
		</div>
	);
};

export default EditCard;
