"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { BiSearch } from "react-icons/bi";
import { FaBell } from "react-icons/fa";

const Topbar = () => {
	const [search, setSearch] = useState("");

	return (
		<div className="sticky bg-inherit top-0 flex flex-row w-full py-5 px-14 justify-between z-50">
			<label className="relative bg-blue-light rounded-lg flex w-[563px]">
				<input
					type="text"
					name="search"
					id="search"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
					placeholder="Search"
					className="w-full h-full bg-transparent rounded-md p-1.5 px-3 outline-none border-none"
				/>
				<button
					type="button"
					className="absolute right-5 top-3"
					onClick={() => {}}
				>
					<BiSearch size={20} />
				</button>
			</label>
			<div className="flex flex-row gap-5 items-center">
				<button type="button" className="rounded-lg" onClick={() => {}}>
					<FaBell size={25} />
				</button>
				<div className="rounded-full bg-green-500 text-primary h-10 w-10 font-bold flex items-center justify-center">
					AG
				</div>
			</div>
		</div>
	);
};

export default Topbar;
