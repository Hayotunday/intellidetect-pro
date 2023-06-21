import React from "react";

import { BsFillArrowLeftSquareFill } from "react-icons/bs";

import OverviewCard from "@components/OverviewCard";

const user = () => {
	return (
		<div className="w-full px-16 py-8 flex flex-col">
			<h1 className="text-left text-2xl text-grey font-bold mb-5 flex flex-row gap-3 items-center">
				<BsFillArrowLeftSquareFill size={20} />
				User
			</h1>

			<div className="flex flex-row gap-3 mt-4">
				<div className="w-1/3">
					<OverviewCard num={721} percent={"11.01"} title={"Active Account"} />
				</div>
				<div className="w-1/3">
					<OverviewCard num={367} percent={"9.15"} title={"Freeze Account"} />
				</div>
				<div className="w-1/3">
					<OverviewCard
						num={1156}
						percent={"-0.56"}
						title={"Suspicious Account"}
					/>
				</div>
			</div>

			<div className=""></div>
		</div>
	);
};

export default user;
