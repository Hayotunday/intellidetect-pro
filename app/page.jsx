import React from "react";

import { BsFillArrowLeftSquareFill } from "react-icons/bs";

import OverviewCard from "@components/OverviewCard";

export default function Home() {
	return (
		<div className="w-full px-16 py-8 flex flex-col">
			<h1 className="text-left text-2xl text-grey font-bold mb-5 flex flex-row gap-3 items-center">
				<BsFillArrowLeftSquareFill size={20} />
				Dashboard
			</h1>

			<div className="w-full h-24 rounded-lg bg-blue-light flex flex-col items-start justify-between gap-px p-5">
				<h3 className="text-blue-dark text-left text-xl font-bold">
					Hey welcome Back, Bedlam!👋
				</h3>
				<p className="text-blue-dark text-left text-base font-sm whitespace-normal break-normal">
					Welcome back to your financial dashboard! We're excited to help you
					monitor your user’s transaction and fraud detection
				</p>
			</div>

			<p className="text-left text-grey text-xl font-bold mt-5">Overview</p>

			<div className="flex flex-row gap-3 mt-4">
				<div className="w-1/4">
					<OverviewCard
						num={721}
						percent={"11.01"}
						title={"Total Transaction"}
					/>
				</div>
				<div className="w-1/4">
					<OverviewCard
						num={367}
						percent={"9.15"}
						title={"Suspicious Transaction"}
					/>
				</div>
				<div className="w-1/4">
					<OverviewCard
						num={1156}
						percent={"-0.56"}
						title={"On Going Investigation"}
					/>
				</div>
				<div className="w-1/4">
					<OverviewCard num={239} percent={"-1.48"} title={"Resolved"} />
				</div>
			</div>

			<p className="text-left text-grey text-xl font-bold mt-5">Transaction</p>

			<div className=""></div>

			<p className="text-left text-grey text-xl font-bold mt-5">
				Suspicious Transaction
			</p>

			<div className=""></div>
		</div>
	);
}
