"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

import Input from "@components/Input";
import VerifyMail from "@components/VerifyMail";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [isVisible, setIsVisible] = useState(false);

	const router = useRouter();

	var globalWidth = global.innerWidth;
	var globalHeight = global.innerHeight;

	return (
		<main className="flex min-h-screen flex-row bg-white-screen relative">
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
				<form className="bg-white p-10 flex flex-col items-center justify-center rounded-lg">
					<div className="flex flex-col gap-1 w-full items-start">
						<h1 className="text-black-screen text-3xl font-bold text-left">
							Forgot Password
						</h1>
						<p className="text-grey text-base font-normal text-left">
							Enter the mail you use to register on the system.
						</p>
					</div>

					<div className="mt-5">
						<Input
							inputholder={"Email"}
							onChangeValue={(e) => {
								setEmail(e.target.value);
							}}
							placeholder={"enter your email"}
							type={"email"}
							value={email}
						/>
					</div>

					<div className="flex flex-col gap-3 w-100 mt-5">
						<button
							type="button"
							className="flex items-center justify-center h-14 w-full blue-gradient rounded-lg text-white"
							onClick={async () => {
								if (email !== "") {
									try {
										await axios
											.post(
												"https://coinrimp-intelli.ygrehu.easypanel.host/password/forgot",
												{ email }
											)
											.then((res) => {
												if (res.data) {
													setIsVisible(true);
												}
											});
									} catch (error) {
										console.log(error);
									}
								} else {
									alert("Fill the form.");
								}
							}}
						>
							Reset Password
						</button>
						<Link href={"/login"}>
							<div className="flex items-center justify-center h-14 w-full border border-grey rounded-lg text-grey">
								Go back to login
							</div>
						</Link>
					</div>
				</form>
			</section>

			{isVisible && (
				<VerifyMail
					email={email}
					handleClick={() => {
						setIsVisible(false);
					}}
					route={"/password/create"}
				/>
			)}
		</main>
	);
};

export default ForgotPassword;
