"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

import { useDispatch } from "react-redux";
import { update } from "@redux/company";

import Input from "@components/Input";

const login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();
	const dispatch = useDispatch();

	var globalWidth = global.innerWidth;
	var globalHeight = global.innerHeight;

	return (
		<main className="flex min-h-screen flex-row bg-white-screen">
			<section className="w-1/2 h-screen">
				<Image
					src={"/images/loginbg.png"}
					width={globalWidth / 2}
					height={globalHeight}
					alt="Login background image"
					className="h-screen min-w-full"
				/>
			</section>
			<section className="w-1/2 h-screen flex items-center justify-center">
				<form className="">
					<div className="flex flex-col gap-1">
						<h1 className="text-black-screen text-3xl font-bold text-left">
							Welcome back!
						</h1>
						<p className="text-grey text-base font-normal text-left">
							Please enter your username and password
						</p>
					</div>

					<div className="mt-5">
						<Input
							inputholder={"Email"}
							onChangeValue={(e) => {
								setEmail(e.target.value.trim());
							}}
							placeholder={"enter your email"}
							type={"email"}
							value={email}
						/>
					</div>

					<div className="mt-5">
						<Input
							inputholder={"Password"}
							onChangeValue={(e) => {
								setPassword(e.target.value.trim());
							}}
							placeholder={"enter password"}
							type={"text"}
							value={password}
							secureText
						/>
					</div>

					<Link href={"/password/forgot"} className="flex justify-end mt-3">
						<p className="text-right text-brown-orange text-base font-semibold w-fit">
							Forgot Password?
						</p>
					</Link>

					<div className="flex flex-col gap-3 w-100 mt-5">
						<button
							type="button"
							onClick={async () => {
								if (email !== "" && password !== "") {
									try {
										await axios
											.post(
												"https://coinrimp-intelli.ygrehu.easypanel.host/login",
												{
													email,
													password,
												}
											)
											.then((res) => {
												if (res.data) {
													window.localStorage.setItem(
														"IntelliToken",
														res.data.token
													);
													router.push("/");
												}
											});
									} catch (error) {
										console.log(error);
									}
								}
							}}
							className="flex items-center justify-center h-14 w-full blue-gradient rounded-lg text-white"
						>
							Sign In
						</button>
						<Link href={"/signup"}>
							<div className="flex items-center justify-center h-14 w-full border border-grey rounded-lg text-grey">
								Create Account
							</div>
						</Link>
					</div>
				</form>
			</section>
		</main>
	);
};

export default login;
