"use client";

import { useState } from "react";
import Image from "next/image";

import { BsFillArrowLeftSquareFill } from "react-icons/bs";

import Input from "@components/Input";

const profile = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("ajaniben123456@gmail.com");
	const [oldPass, setOldPass] = useState("");
	const [newPass, setNewPass] = useState("");

	return (
		<div className="w-full px-16 py-2 flex flex-col">
			<h1 className="text-left text-2xl text-grey font-bold mb-5 flex flex-row gap-3 items-center">
				<BsFillArrowLeftSquareFill size={20} />
				Profile
			</h1>

			<div className="flex flex-col mt-1 gap-3 px-12">
				{/* <div className="w-20 h-20 rounded-full "> */}
				<Image
					src={"/images/profilepic.png"}
					width={120}
					height={120}
					className="rounded-full"
					alt="Profile picture"
				/>
				{/* </div> */}

				<div className="w-full flex flex-row justify-between items-start">
					<div className="">
						<h1 className="text-black-screen text-left text-2xl font-bold">
							Full Name
						</h1>
						<p className="text-black-screen text-left text-sm font-normal">
							Your full name
						</p>
					</div>
					<div className="flex flex-col gap-3 ">
						<Input
							onChangeValue={(e) => {
								setName(e.target.value);
							}}
							placeholder={"full name"}
							type={"text"}
							value={name}
						/>
						<button
							type="button"
							className="blue-gradient rounded-lg p-3 w-40 text-white-smoke text-center text-sm font-medium"
							onClick={() => {}}
						>
							Save Change
						</button>
					</div>
				</div>

				<div className="w-full flex flex-row justify-between items-start">
					<div className="">
						<h1 className="text-black-screen text-left text-2xl font-bold">
							Email
						</h1>
						<p className="text-black-screen text-left text-sm font-normal">
							Used to sign into and receive notifications for this account.
						</p>
					</div>
					<div className="bg-white h-12 w-100 border-2 flex items-center border-slate-500 rounded-lg placeholder:text-slate-500 outline-0 p-5">
						{email}
					</div>
				</div>

				<div className="w-full flex flex-row justify-between items-start">
					<div className="">
						<h1 className="text-black-screen text-left text-2xl font-bold">
							Password
						</h1>
						<p className="text-black-screen text-left text-sm font-normal">
							Change password
						</p>
					</div>
					<div className="flex flex-col gap-3">
						<div className="w-100">
							<Input
								onChangeValue={(e) => {
									setOldPass(e.target.value);
								}}
								placeholder={"old password"}
								type={"text"}
								secureText
								value={oldPass}
							/>
						</div>
						<div className="w-100">
							<Input
								onChangeValue={(e) => {
									setNewPass(e.target.value);
								}}
								placeholder={"new password"}
								type={"text"}
								secureText
								value={newPass}
							/>
						</div>
						<button
							type="button"
							className="blue-gradient rounded-lg p-3 w-40 text-white-smoke text-center text-sm font-medium"
							onClick={() => {}}
						>
							Change Password
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default profile;
