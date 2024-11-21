import React from "react";

interface TradingInputProps {
	name: string;
	label: string;
	placeHolder: string;
	value?: string | number; // Supports controlled input
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle input changes
}

const TradingInput: React.FC<TradingInputProps> = ({ name, label, placeHolder, value, onChange }) => {
	const inputClass =
		"w-full px-4 py-2 text-base bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-neonGreen focus:border-transparent transition duration-300";

	return (
		<div>
			<label className="block text-sm font-medium mb-1">{label}</label>
			<input
				name={name}
				placeholder={placeHolder}
				value={value}
				onChange={onChange}
				className={inputClass}
			/>
		</div>
	);
};

export default TradingInput;
