"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

import { BsFillArrowLeftSquareFill } from "react-icons/bs";

import Input from "@components/Input";

const Profile = () => {
	const [data, setData] = useState({});
	const [profile, setProfile] = useState({
		name: "",
		zip_code: "",
		country: "",
		address: "",
		city: "",
	});
	const [load, setLoad] = useState(true);
	const [email, setEmail] = useState("");
	const [oldPass, setOldPass] = useState("");
	const [newPass, setNewPass] = useState("");

	useEffect(() => {
		const getProfile = async () => {
			const token = window.localStorage.getItem("userToken");
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};
			try {
				await axios
					.get("https://coinrimp-intelli.ygrehu.easypanel.host/profile", config)
					.then((res) => {
						setProfile({
							name: res.data.fullname,
							zip_code: res.data.zip_code,
							country: res.data.country,
							address: res.data.address,
							city: res.data.city,
						});
						setData(res.data);
						setEmail(res.data.email);
						console.log(res.data);
					});
			} catch (error) {
				console.log(error);
			}
		};

		getProfile();
	}, [load]);

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

				<form className="flex flex-col w-full my-8 gap-3">
					{/* Full Name */}
					<div className="w-full flex flex-row justify-between items-start">
						<div className="">
							<h1 className="text-black-screen text-left text-2xl font-bold">
								Full Name
							</h1>
							<p className="text-black-screen text-left text-sm font-normal">
								Your full name
							</p>
						</div>
						<div className="flex">
							<Input
								onChangeValue={(e) => {
									setProfile({ ...profile, name: e.target.value });
								}}
								placeholder={"full name"}
								type={"text"}
								value={profile.name}
							/>
						</div>
					</div>

					{/* 2 */}
					<div className="w-full flex flex-row justify-between items-start">
						<div className="">
							<h1 className="text-black-screen text-left text-2xl font-bold">
								Address
							</h1>
						</div>
						<div className="flex flex-col gap-3 ">
							<Input
								onChangeValue={(e) => {
									setProfile({ ...profile, address: e.target.value });
								}}
								placeholder={"address"}
								type={"text"}
								value={profile.address}
							/>
						</div>
					</div>

					{/* 3 */}
					<div className="w-full flex flex-row justify-between items-start">
						<div className="">
							<h1 className="text-black-screen text-left text-2xl font-bold">
								City
							</h1>
						</div>
						<div className="flex flex-col gap-3 ">
							<Input
								onChangeValue={(e) => {
									setProfile({ ...profile, city: e.target.value });
								}}
								placeholder={"city"}
								type={"text"}
								value={profile.city}
							/>
						</div>
					</div>

					{/* 4 */}
					<div className="w-full flex flex-row justify-between items-start">
						<div className="">
							<h1 className="text-black-screen text-left text-2xl font-bold">
								Country
							</h1>
						</div>
						<div className="flex flex-col gap-3 ">
							<Input
								onChangeValue={(e) => {
									setProfile({ ...profile, country: e.target.value });
								}}
								placeholder={"country"}
								type={"text"}
								value={profile.country}
							/>
						</div>
					</div>

					{/* 5 */}
					<div className="w-full flex flex-row justify-between items-start">
						<div className="">
							<h1 className="text-black-screen text-left text-2xl font-bold">
								Zip code
							</h1>
						</div>
						<div className="flex flex-col gap-3 ">
							<Input
								onChangeValue={(e) => {
									setProfile({ ...profile, zip_code: e.target.value });
								}}
								placeholder={"zip code"}
								type={"text"}
								value={profile.zip_code}
							/>
							{profile.address !== data.address &&
								profile.city !== data.city &&
								profile.country !== data.country &&
								profile.name !== data.name &&
								profile.zip_code !== data.zip_code && (
									<button
										type="button"
										className="blue-gradient rounded-lg p-3 w-40 text-white-smoke text-center text-sm font-medium"
										onClick={async () => {
											const token = window.localStorage.getItem("userToken");
											const config = {
												headers: { Authorization: `Bearer ${token}` },
											};
											try {
												await axios
													.put(
														"https://coinrimp-intelli.ygrehu.easypanel.host/profile",
														profile,
														config
													)
													.then((res) => {
														console.log(res);
														setLoad(!load);
													});
											} catch (error) {
												console.log(error);
											}
										}}
									>
										Save Change
									</button>
								)}
						</div>
					</div>
				</form>

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
							onClick={async () => {
								const token = window.localStorage.getItem("userToken");

								if (oldPass !== "" && newPass !== "") {
									const config = {
										headers: { Authorization: `Bearer ${token}` },
									};
									try {
										await axios
											.put(
												"https://coinrimp-intelli.ygrehu.easypanel.host/password/change",
												{
													old_password: oldPass,
													new_password: newPass,
													confirm_password: newPass,
												},
												config
											)
											.then((res) => {
												alert(res.data.message);
												setOldPass("");
												setNewPass("");
											});
									} catch (error) {
										if (
											error.response.data.error === "Incorrect old Password"
										) {
											alert(error.response.data.error);
										} else {
											console.log(error);
										}
									}
								} else {
									alert("Fill the form.");
								}
							}}
						>
							Change Password
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
