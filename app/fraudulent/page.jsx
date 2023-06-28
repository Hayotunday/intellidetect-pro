import React from "react";

import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const Fraudulent = () => {
	return (
		<div className="w-full px-16 py-8 flex flex-col">
			<h1 className="text-left text-2xl text-grey font-bold mb-5 flex flex-row gap-3 items-center">
				<BsFillArrowLeftSquareFill size={20} />
				Fraudulent Transactions
			</h1>

			<div className=""></div>
		</div>
	);
};

export default Fraudulent;
