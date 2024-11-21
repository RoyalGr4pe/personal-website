"use client";

import { useState } from "react";

import { formatLargeNumber } from "../utils/format-large-number";
import TradingInput from "./TradingInput";
import defaultFees from "../config/default-fees.json";
import Checkbox from "./Checkbox";


const MarketCapToBreak = () => {
	// Set initial fees from the config file
	const [requiredMarketcap, setRequiredMarketcap] = useState<number | null>(null);
	const [buyMarketcap, setBuyMarketcap] = useState<string>("");
	const [investment, setInvestment] = useState<string>("");
	const [buyFee, setBuyFee] = useState<string>(defaultFees["buy-fees-sol"].toString()); // Set the default buy fee
	const [sellFee, setSellFee] = useState<string>(defaultFees["sell-fees-sol"].toString()); // Set the default sell fee
	const [sellPercentage, setSellPercentage] = useState<string>("");
	const [customizeFees, setCustomizeFees] = useState<boolean>(false); // Checkbox state


	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Set the value based on the checkbox's checked property
		setCustomizeFees(e.target.checked);
	};


	const calculateMarketcapForProfit = (
		buyMarketcap: number,
		investment: number,
		buyFee: number,
		sellFee: number,
		sellPercentage: number
	): number => {
		const sellPercentageDecimal = sellPercentage / 100;
		const totalCost = investment + buyFee + sellFee;
		const requiredProceeds = totalCost;

		return buyMarketcap * (requiredProceeds / (sellPercentageDecimal * investment));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const numericBuyMarketcap = parseFloat(buyMarketcap.replace(/,/g, "")) * 1000; // Multiply by 1000 to convert to full value
		const numericInvestment = parseFloat(investment);
		const numericBuyFee = parseFloat(buyFee);
		const numericSellFee = parseFloat(sellFee);
		const numericSellPercentage = parseFloat(sellPercentage);

		if (
			isNaN(numericBuyMarketcap) ||
			isNaN(numericInvestment) ||
			isNaN(numericBuyFee) ||
			isNaN(numericSellFee) ||
			isNaN(numericSellPercentage)
		) {
			alert("Please enter valid numbers for all fields.");
			return;
		}

		const result = calculateMarketcapForProfit(
			numericBuyMarketcap,
			numericInvestment,
			numericBuyFee,
			numericSellFee,
			numericSellPercentage
		);

		setRequiredMarketcap(result);
	};

	return (
		<div className="w-full max-w-lg bg-gray-800 text-gray-200 shadow-xl rounded-lg p-8">
			<h1 className="text-3xl font-bold text-neonGreen mb-4">Market Cap Calculator</h1>
			<p className="text-gray-400 mb-6">
				Calculate the market cap required to break even and keep the remaining as profit.
			</p>

			<form onSubmit={handleSubmit} className="space-y-5">
				<TradingInput
					name="buyMarketcap"
					label="Buy Market Cap (K)"
					placeHolder="Enter buy market cap"
					value={buyMarketcap}
					onChange={(e) => setBuyMarketcap(formatLargeNumber(e.target.value))}
				/>

				<TradingInput
					name="investment"
					label="Investment (in SOL)"
					placeHolder="Enter investment amount"
					value={investment}
					onChange={(e) => setInvestment(e.target.value)}
				/>

				<TradingInput
					name="sellPercentage"
					label="Sell Percentage (%)"
					placeHolder="Enter sell percentage"
					value={sellPercentage}
					onChange={(e) => setSellPercentage(e.target.value)}
				/>

				{/* Checkbox to toggle custom fees */}
				<Checkbox label="Edit default fees" checked={customizeFees} onChange={handleCheckboxChange} />

				{/* Fee Inputs (conditionally rendered) */}
				{customizeFees && (
					<>
						<TradingInput
							name="buyFee"
							label="Buy Fee (in SOL)"
							placeHolder="Enter buy fee"
							value={buyFee}
							onChange={(e) => setBuyFee(e.target.value)}
						/>
						<TradingInput
							name="sellFee"
							label="Sell Fee (in SOL)"
							placeHolder="Enter sell fee"
							value={sellFee}
							onChange={(e) => setSellFee(e.target.value)}
						/>
					</>
				)}

				<button
					type="submit"
					className="w-full bg-neonGreen text-gray-900 font-medium py-3 px-4 mt-6 rounded-lg hover:bg-green-400 transition focus:outline-none focus:ring-2 focus:ring-neonGreen focus:ring-offset-2"
				>
					Calculate
				</button>
			</form>

			{requiredMarketcap !== null && (
				<div className="mt-6 p-4 bg-gray-700 text-gray-200 rounded-lg">
					<h3 className="text-lg font-semibold text-neonGreen">Results:</h3>
					<p className="mt-2">
						To break even and keep the remaining as profit, you need to sell at a market cap of:{" "}
						<span className="font-bold text-green-400">
							{requiredMarketcap >= 1_000_000
								? `${(requiredMarketcap / 1_000_000).toFixed(3)}M`
								: requiredMarketcap >= 1_000
									? `${(requiredMarketcap / 1_000).toFixed(3)}K`
									: requiredMarketcap.toFixed(2)}
						</span>
					</p>
				</div>
			)}
		</div>
	);
};

export default MarketCapToBreak;
