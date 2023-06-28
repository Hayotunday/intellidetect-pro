"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Provider } from "react-redux";
import store from "@redux/store";

import { RiHome5Fill } from "react-icons/ri";
import { HiUsers, HiUser } from "react-icons/hi";
import { IoSettings, IoLogOut, IoFlag } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";

import Topbar from "@components/Topbar";

export default function Root({ children }) {
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const isLoggedIn =
			window.localStorage.getItem("IntelliToken") === undefined ||
			(window.localStorage.getItem("IntelliToken") === null
				? ""
				: window.localStorage.getItem("IntelliToken"));

		if (
			isLoggedIn === "" &&
			pathname !== "/login" &&
			pathname !== "/signup" &&
			pathname !== "/signup/stage-two" &&
			pathname !== "/signup/stage-three" &&
			pathname !== "/signup/stage-four" &&
			pathname !== "/signup/final-stage" &&
			pathname !== "/password/forgot" &&
			pathname !== "/password/create"
		) {
			return router.push("/login");
		}
	}, []);

	return (
		<Provider store={store}>
			<body className="font-publicSans overflow-x-hidden">
				{pathname !== "/login" &&
				pathname !== "/signup" &&
				pathname !== "/signup/stage-two" &&
				pathname !== "/signup/stage-three" &&
				pathname !== "/signup/stage-four" &&
				pathname !== "/signup/final-stage" &&
				pathname !== "/password/forgot" &&
				pathname !== "/password/create" ? (
					<main className="w-screen min-h-screen flex flex-row relative">
						<section className="w-1/5 sticky top-0 h-screen bg-gradient">
							<nav className="w-full pt-16">
								<h1 className="text-white text-center capitalize text-2xl font-bold">
									IntelliDetect Pro
								</h1>
								<div className="pl-5 mt-14 w-full flex flex-col gap-3 items-end justify-between">
									<Link href={"/"} className="w-full">
										<div
											className={
												pathname === "/"
													? "w-full flex flex-row justify-start items-center gap-3 p-3 text-blue-three font-semibold bg-white-smoke rounded-s-lg"
													: "w-full flex flex-row justify-start items-center gap-3 p-3 text-white-smoke hover:text-blue-three font-semibold hover:bg-white-smoke rounded-s-lg"
											}
										>
											<span>
												<RiHome5Fill size={20} />
											</span>
											Dashboard
										</div>
									</Link>
									<Link href={"/fraudulent-transaction"} className="w-full">
										<div
											className={
												pathname === "/fraudulent-transaction"
													? "w-full flex flex-row justify-start items-center gap-3 p-3 text-blue-three font-semibold bg-white-smoke rounded-s-lg"
													: "w-full flex flex-row justify-start items-center gap-3 p-3 text-white-smoke hover:text-blue-three font-semibold hover:bg-white-smoke rounded-s-lg"
											}
										>
											<span>
												<IoFlag size={20} />
											</span>
											Fraudulent Transaction
										</div>
									</Link>
									<Link href={"/user"} className="w-full">
										<div
											className={
												pathname === "/user" ||
												pathname === "/user/transactions"
													? "w-full flex flex-row justify-start items-center gap-3 p-3 text-blue-three font-semibold bg-white-smoke rounded-s-lg"
													: "w-full flex flex-row justify-start items-center gap-3 p-3 text-white-smoke hover:text-blue-three font-semibold hover:bg-white-smoke rounded-s-lg"
											}
										>
											<span>
												<HiUsers size={20} />
											</span>
											User
										</div>
									</Link>
									<Link href={"/profile"} className="w-full">
										<div
											className={
												pathname === "/profile"
													? "w-full flex flex-row justify-start items-center gap-3 p-3 text-blue-three font-semibold bg-white-smoke rounded-s-lg"
													: "w-full flex flex-row justify-start items-center gap-3 p-3 text-white-smoke hover:text-blue-three font-semibold hover:bg-white-smoke rounded-s-lg"
											}
										>
											<span>
												<HiUser size={20} />
											</span>
											Profile
										</div>
									</Link>
									<Link href={"/settings"} className="w-full">
										<div
											className={
												pathname === "/settings"
													? "w-full flex flex-row justify-start items-center gap-3 p-3 text-blue-three font-semibold bg-white-smoke rounded-s-lg"
													: "w-full flex flex-row justify-start items-center gap-3 p-3 text-white-smoke hover:text-blue-three font-semibold hover:bg-white-smoke rounded-s-lg"
											}
										>
											<span>
												<IoSettings size={20} />
											</span>
											Settings
										</div>
									</Link>
									<Link href={"/subscription-plan"} className="w-full">
										<div
											className={
												pathname === "/subscription-plan"
													? "w-full flex flex-row justify-start items-center gap-3 p-3 text-blue-three font-semibold bg-white-smoke rounded-s-lg"
													: "w-full flex flex-row justify-start items-center gap-3 p-3 text-white-smoke hover:text-blue-three font-semibold hover:bg-white-smoke rounded-s-lg"
											}
										>
											<span>
												<MdSubscriptions size={20} />
											</span>
											Subscription Plan
										</div>
									</Link>
									<button
										type="button"
										onClick={() => {
											window.localStorage.removeItem("IntelliToken");
											router.push("/login");
										}}
										className="w-full mt-5 flex flex-row justify-start items-center gap-3 p-3 text-white-smoke hover:text-blue-three font-semibold hover:bg-white-smoke rounded-s-lg"
									>
										<span>
											<IoLogOut size={20} />
										</span>
										Log out
									</button>
								</div>
							</nav>
						</section>

						<section className="w-4/5 bg-white-screen overflow-x-hidden">
							<Topbar />

							<div className="w-full h-full">{children}</div>
						</section>
					</main>
				) : (
					children
				)}
			</body>
		</Provider>
	);
}
