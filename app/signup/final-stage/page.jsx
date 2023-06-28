"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { update } from "@redux/company";

import Input from "@components/Input";

const Finalstage = () => {
	const { company } = useSelector((state) => state);
	const dispatch = useDispatch();

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
							Final Stage
						</h1>
						<p className="text-grey text-base font-normal text-left">
							Welcome to IntelliDetect Pro. Fill form to create <br /> account.
						</p>
					</div>

					<div className="flex w-full justify-start mt-4">
						<h1 className="text-grey text-left text-2xl font-bold">
							Connect to Database
						</h1>
					</div>

					<div className="mt-2">
						<Input
							inputholder={"Database link"}
							onChangeValue={(e) => {
								dispatch(update({ database_link: e.target.value }));
							}}
							placeholder={"https://"}
							type={"url"}
							value={company.database_link}
						/>
					</div>

					<p className="w-full text-left font-medium text-sm mt-1">
						* link must start with <b>https://</b>
					</p>

					<div className="flex flex-col gap-3 w-100 mt-5">
						<button
							type="button"
							className="flex items-center justify-center h-14 w-full blue-gradient rounded-lg text-white"
							onClick={async () => {
								if (company.database_link.startsWith("https://")) {
									try {
										await axios
											.post(
												"https://coinrimp-intelli.ygrehu.easypanel.host/register",
												company
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
								} else {
									alert("Please start link with https://");
								}
							}}
						>
							Submit
						</button>
						<Link href={"/signup/stage-four"}>
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

export default Finalstage;
