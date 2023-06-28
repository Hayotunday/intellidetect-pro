"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { update } from "@redux/company";

import Input from "@components/Input";

const Signupthree = () => {
	const dispatch = useDispatch();

	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");

	const router = useRouter();

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
				<div className="bg-white p-10 flex flex-col items-center justify-center rounded-lg">
					<div className="flex flex-col gap-1 w-full items-start">
						<h1 className="text-black-screen text-3xl font-bold text-left">
							Stage 3
						</h1>
						<p className="text-grey text-base font-normal text-left">
							Welcome to IntelliDetect Pro. Fill form to create <br /> account.
						</p>
					</div>

					<div className="flex w-full justify-start mt-4">
						<h1 className="text-grey text-left text-2xl font-bold">
							Create Password
						</h1>
					</div>

					<div className="mt-2">
						<Input
							inputholder={"Create Password"}
							onChangeValue={(e) => {
								setPassword(e.target.value);
							}}
							placeholder={"enter password"}
							type={"text"}
							value={password}
							secureText
						/>
					</div>

					<div className="mt-5">
						<Input
							inputholder={"Confirm Password"}
							onChangeValue={(e) => {
								setConfirm(e.target.value);
							}}
							placeholder={"confirm password"}
							type={"text"}
							value={confirm}
							secureText
						/>
					</div>

					<div className="flex flex-col gap-3 w-100 mt-5">
						<button
							type="button"
							className="flex items-center justify-center h-14 w-full blue-gradient rounded-lg text-white"
							onClick={() => {
								dispatch(
									update({
										password: password,
										password_confirmation: confirm,
									})
								);
								router.push("/signup/stage-four");
							}}
						>
							Next
						</button>
						<Link href={"/signup/stage-two"}>
							<div className="flex items-center justify-center h-14 w-full border border-grey rounded-lg text-grey">
								Back
							</div>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Signupthree;
