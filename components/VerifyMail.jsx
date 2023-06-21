import React from "react";
import { useRouter } from "next/navigation";

const VerifyMail = ({ email, handleClick, route }) => {
	const router = useRouter();

	return (
		<div className="h-screen w-screen bg-transparent flex items-center justify-center absolute">
			<div className="h-80 w-125 bg-white-smoke flex flex-col items-center justify-between p-12 rounded-lg shadow-2xl shadow-black">
				<div className="flex flex-col gap-1 items-center justify-center">
					<h1 className="text-black-screen text-2xl text-center font-bold">
						Verify Your Email Address
					</h1>
					<p className="text-grey text-sm text-center whitespace-normal font-normal">
						We've sent a verification email to {email} Please check your inbox
						or promotions folder.
					</p>
				</div>
				<button
					onClick={() => {
						router.push(route);
					}}
					type="button"
					className="blue-gradient text-white text-base text-center font-medium w-full p-2 rounded-lg"
				>
					Open my mail
				</button>
				<p className="text-grey text-sm text-center font-normal whitespace-normal">
					By clicking “Create my account”, I agree to IntelliDetect Pro Terms of
					use and Privacy Policy
				</p>
				<button
					onClick={handleClick}
					type="button"
					className="text-blue-dark text-center text-sm font-normal"
				>
					Wrong email address? click here
				</button>
			</div>
		</div>
	);
};

export default VerifyMail;
