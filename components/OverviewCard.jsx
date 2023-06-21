import React from "react";

import { HiOutlineTrendingDown, HiOutlineTrendingUp } from "react-icons/hi";

const OverviewCard = ({ title, num = 0, percent = 0 }) => {
	var isPositive = percent < 0;

	return (
		<div className="h-28 w-full p-4 flex flex-col justify-between rounded-lg text-white-smoke bg-gradient-to-br from-blue-one via-blue-two to-blue-three">
			<h1 className="text-left text-base font-semibold">{title}</h1>
			<div className="flex flex-row items-center justify-between w-full">
				<p className="text-left text-2xl font-bold">{num.toLocaleString()}</p>
				<p className="flex gap-1 text-sm text-right font-light items-center">
					{percent + "%"}{" "}
					<span>
						{isPositive ? (
							<HiOutlineTrendingDown size={20} />
						) : (
							<HiOutlineTrendingUp size={20} />
						)}
					</span>
				</p>
			</div>
		</div>
	);
};

export default OverviewCard;
