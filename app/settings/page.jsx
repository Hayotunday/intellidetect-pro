"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { BsFillArrowLeftSquareFill } from "react-icons/bs";

import Input from "@components/Input";
import AddCard from "@components/AddCard";
import EditCard from "@components/EditCard";

import { userArray } from "@utils/data";

const settings = () => {
	const [name, setName] = useState("Ajani Ben Dara");
	const [email, setEmail] = useState("ajaniben123456@gmail.com");
	const [website, setWebsite] = useState("www.ajaniben123456.com");

	const [newEmail, setNewEmail] = useState("");
	const [newMember, setNewMember] = useState({ name: "", email: "", role: "" });
	const [members, setMembers] = useState("");
	const [users, setUsers] = useState(userArray);
	const [isAddVisible, setIsAddVisible] = useState(false);
	const [isEditVisible, setIsEditVisible] = useState(false);

	useEffect(() => {
		const getProfile = async () => {
			const token = window.localStorage.getItem("userToken");
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};
			try {
				await axios
					.get("https://coinrimp-intelli.ygrehu.easypanel.host/company", config)
					.then((res) => {
						console.log(res);
						// setName(res.data.fullname);
						// setData(res.data);
						// setEmail(res.data.email);
					});
			} catch (error) {
				console.log(error);
			}
		};
		const getMembers = async () => {
			const token = window.localStorage.getItem("userToken");
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};
			try {
				await axios
					.get(
						"https://coinrimp-intelli.ygrehu.easypanel.host/account/members",
						config
					)
					.then((res) => {
						console.log(res);
					});
			} catch (error) {
				console.log(error);
			}
		};

		getProfile();
		getMembers();
	}, []);

	const setMemberEmail = (e) => {
		setNewMember({ ...newMember, email: e });
	};
	const setMemberName = (e) => {
		setNewMember({ ...newMember, name: e });
	};
	const setMemberRole = (e) => {
		setNewMember({ ...newMember, role: e });
	};

	const handleAddMember = async () => {
		const token = window.localStorage.getItem("userToken");

		const { name, email, role } = newMember;

		if (name !== "" && email !== "") {
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};
			try {
				await axios
					.post(
						"https://coinrimp-intelli.ygrehu.easypanel.host/account/member",
						{ name: newMember.name, email: newMember.email },
						config
					)
					.then((res) => {
						console.log(res);
						setNewMember({ name: "", email: "", role: "" });
						setIsAddVisible(false);
					});
			} catch (error) {
				console.log(error);
			}
		} else {
			alert("Fill form completely to add new member");
		}
	};

	return (
		<div className="w-11/12 px-16 py-2 flex flex-col relative">
			<h1 className="text-left text-2xl text-grey font-bold mb-5 flex flex-row gap-3 items-center">
				<BsFillArrowLeftSquareFill size={20} />
				Settings
			</h1>

			<div className="flex flex-col mt-1 gap-3 px-12">
				<div className="flex flex-col gap-3">
					<div className="flex flex-row gap-3 justify-between items-start">
						<div className="">
							<h1 className="text-black-screen text-xl text-left font-bold capitalize">
								Company Name
							</h1>
							<p className="text-black-screen text-sm text-left font-light">
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<Input
								onChangeValue={(e) => {
									setName(e.target.value);
								}}
								type={"text"}
								value={name}
							/>
							<button
								type="button"
								className="blue-gradient rounded-lg p-3 w-40 text-white-smoke text-center text-sm font-medium"
								onClick={async () => {
									const token = window.localStorage.getItem("userToken");

									if (name !== "" && name !== data.fullname) {
										const config = {
											headers: { Authorization: `Bearer ${token}` },
										};
										try {
											await axios
												.put(
													"https://coinrimp-intelli.ygrehu.easypanel.host/company",
													{ name },
													config
												)
												.then((res) => {
													console.log(res);
												});
										} catch (error) {
											console.log(error);
										}
									} else {
										alert("Update Company name to be able to save changes");
									}
								}}
							>
								Save changes
							</button>
						</div>
					</div>

					<div className="flex flex-row gap-3 justify-between items-start">
						<div className="">
							<h1 className="text-black-screen text-xl text-left font-bold capitalize">
								Company Email
							</h1>
							<p className="text-black-screen text-sm text-left font-light whitespace-normal break-normal">
								Lorem ipsum dolor sit amet consectetur. In justo et <br />{" "}
								ultrices lorem cursus felis.
							</p>
						</div>
						<div className="bg-white h-12 w-100 border-2 flex items-center border-slate-500 rounded-lg placeholder:text-slate-500 outline-0 p-5">
							{email}
						</div>
					</div>

					<div className="flex flex-row gap-3 justify-between items-start">
						<div className="">
							<h1 className="text-black-screen text-xl text-left font-bold capitalize">
								Company Website
							</h1>
							<p className="text-black-screen text-sm text-left font-light whitespace-normal break-normal">
								Lorem ipsum dolor sit amet consectetur. In justo et <br />{" "}
								ultrices lorem cursus felis.
							</p>
						</div>
						<div className="bg-white h-12 w-100 border-2 flex items-center border-slate-500 rounded-lg placeholder:text-slate-500 outline-0 p-5">
							{website}
						</div>
					</div>
				</div>

				<div className="mt-8">
					<h1 className="text-grey text-left text-lg font-bold -ml-5 mb-2">
						Users
					</h1>
					<div className="w-full">
						<table className="w-full">
							<thead className="w-full">
								<tr className="w-full text-left text-lg text-black-screen font-semibold">
									<th className="">Email</th>
									<th className="">Role</th>
									<th className="">Status</th>
								</tr>
							</thead>
							<tbody className="gap-5">
								{users.map((user, index) => (
									<tr
										onClick={() => {
											setIsEditVisible(!isEditVisible);
										}}
										key={index}
										className="text-left text-base text-grey font-medium mt-5 cursor-pointer hover:bg-slate-300"
									>
										<td className="">{user.email}</td>
										<td className="">{user.role}</td>
										<td className="">
											<div
												className={
													user.status === "Pending"
														? "rounded-lg p-2 w-24 flex items-center justify-center text-white font-extralight text-sm text-center bg-blue-dark"
														: user.status === "Active"
														? "rounded-lg p-2 w-24 flex items-center justify-center text-white font-extralight text-sm text-center bg-green-dark"
														: "rounded-lg p-2 w-24 flex items-center justify-center text-white font-extralight text-sm text-center bg-brown-orange"
												}
											>
												{user.status}
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<button
					type="button"
					className="bg-blue-dark p-3 mt-5 rounded-lg text-center text-sm text-white font-light flex items-center justify-center self-center"
					onClick={() => {
						setIsAddVisible(!isAddVisible);
					}}
				>
					Add New User
				</button>
			</div>

			{isAddVisible && (
				<AddCard
					email={newMember.email}
					setEmail={setMemberEmail}
					name={newMember.name}
					setName={setMemberName}
					role={newMember.role}
					setRole={setMemberRole}
					handleClick={handleAddMember}
					handleCancel={() => {
						setIsAddVisible(false);
					}}
				/>
			)}

			{isEditVisible && (
				<EditCard
					email={newEmail}
					setEmail={setNewEmail}
					role={role}
					setRole={setRole}
					status={status}
					setStatus={setStatus}
					handleClick={() => {
						setIsEditVisible(false);
					}}
					handleCancel={() => {
						setIsEditVisible(false);
					}}
				/>
			)}
		</div>
	);
};

export default settings;
