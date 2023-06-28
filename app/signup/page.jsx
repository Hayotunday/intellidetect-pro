"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { update } from "@redux/company";

import Input from "@components/Input";

const signupone = () => {
	const dispatch = useDispatch();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [website, setWebsite] = useState("");

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
							Welcome !
						</h1>
						<p className="text-grey text-base font-normal text-left">
							Welcome to IntelliDetect Pro. Fill form to create <br /> account.
						</p>
					</div>

					<div className="mt-5">
						<Input
							inputholder={"Company Name"}
							onChangeValue={(e) => {
								setName(e.target.value);
							}}
							placeholder={"company name"}
							type={"text"}
							value={name}
						/>
					</div>

					<div className="mt-5">
						<Input
							inputholder={"Company Email"}
							onChangeValue={(e) => {
								setEmail(e.target.value);
							}}
							placeholder={"company email"}
							type={"text"}
							value={email}
						/>
					</div>

					<div className="mt-6">
						<Input
							inputholder={"Company Website"}
							onChangeValue={(e) => {
								setWebsite(e.target.value);
							}}
							placeholder={"company website"}
							type={"text"}
							value={website}
						/>
					</div>

					<div className="flex flex-col gap-3 w-100 mt-5">
						<button
							type="button"
							className="flex items-center justify-center h-14 w-full blue-gradient rounded-lg text-white"
							onClick={() => {
								if (name !== "" && email !== "" && website !== "") {
									dispatch(
										update({
											company_name: name,
											company_email: email,
											company_website: website,
										})
									);
									router.push("/signup/stage-two");
								}
							}}
						>
							Create Account
						</button>
						<Link href={"/login"}>
							<div className="flex items-center justify-center h-14 w-full border border-grey rounded-lg text-grey">
								Sign In
							</div>
						</Link>
					</div>

					<p className="w-full text-left font-medium text-sm mt-1">
						* link must start with <b>https://</b>
					</p>
				</div>
			</section>
		</main>
	);
};

export default signupone;
