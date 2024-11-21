"use client";

import React, { useState, useEffect } from "react";

import { formatLargeNumber } from "../utils/format-large-number";
import fetchSolPrice from "../utils/fetch-sol-price";
import TradingInput from "./TradingInput";
import defaultFees from "../config/default-fees.json";
import Checkbox from "./Checkbox";

const MarketCapProfits = () => {
	const [profits, setProfits] = useState<{
		solMade: number | null;
		totalSol: number | null;
		percentProfit: number | null;
		usdMade: number | null;
	}>({ solMade: null, totalSol: null, percentProfit: null, usdMade: null });

	const [buyMarketcap, setBuyMarketcap] = useState<string>("");
	const [sellMarketcap, setSellMarketcap] = useState<string>("");
	const [investment, setInvestment] = useState<string>("");
	const [buyFee, setBuyFee] = useState<string>(defaultFees["buy-fees-sol"].toString());
	const [sellFee, setSellFee] = useState<string>(defaultFees["sell-fees-sol"].toString());
	const [customizeFees, setCustomizeFees] = useState<boolean>(false);
	const [solPrice, setSolPrice] = useState<number | null>(null);

	// Fetch current SOL price when the component mounts
	useEffect(() => {
		const getSolPrice = async () => {
			const price = await fetchSolPrice();
			if (price !== null) {
				setSolPrice(price);
			}
		};

		getSolPrice();
	}, []);

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Set the value based on the checkbox's checked property
		setCustomizeFees(e.target.checked);
	};

	// Calculate profits based on sell market cap
	const calculateProfits = (
		buyMarketcap: number,
		sellMarketcap: number,
		investment: number,
		buyFee: number,
		sellFee: number,
		solPrice: number
	) => {
		const priceRatio = sellMarketcap / buyMarketcap;
		const grossProceeds = priceRatio * investment;
		const netProceeds = grossProceeds - buyFee - sellFee;

		// Percent profit = ((Net Proceeds - Initial Investment) / Initial Investment) * 100
		const percentProfit = ((netProceeds - investment) / investment) * 100;

		// Calculate total SOL (investment + sol made)
		const solMade = netProceeds - investment;
		const totalSol = investment + solMade;

		// Convert SOL made to USD
		const usdMade = solMade * solPrice;

		return { solMade, totalSol, percentProfit, usdMade };
	};

	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Parse numeric values from inputs
		const numericBuyMarketcap = parseFloat(buyMarketcap.replace(/,/g, "")) * 1000;
		const numericSellMarketcap = parseFloat(sellMarketcap.replace(/,/g, "")) * 1000;
		const numericInvestment = parseFloat(investment);
		const numericBuyFee = parseFloat(buyFee);
		const numericSellFee = parseFloat(sellFee);

		if (
			isNaN(numericBuyMarketcap) ||
			isNaN(numericSellMarketcap) ||
			isNaN(numericInvestment) ||
			isNaN(numericBuyFee) ||
			isNaN(numericSellFee) ||
			solPrice === null
		) {
			alert("Please enter valid numbers for all fields.");
			return;
		}

		const result = calculateProfits(
			numericBuyMarketcap,
			numericSellMarketcap,
			numericInvestment,
			numericBuyFee,
			numericSellFee,
			solPrice
		);

		setProfits(result);
	};

	return (
		<div className="w-full max-w-lg bg-gray-800 text-gray-200 shadow-xl rounded-lg p-8">
			<h1 className="text-3xl font-bold text-neonGreen mb-4">Profit Calculator</h1>
			<p className="text-gray-400 mb-6">
				Enter the market caps and fees to calculate your profits and percent profit.
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
					name="sellMarketcap"
					label="Sell Market Cap (K)"
					placeHolder="Enter sell market cap"
					value={sellMarketcap}
					onChange={(e) => setSellMarketcap(formatLargeNumber(e.target.value))}
				/>

				<TradingInput
					name="investment"
					label="Investment (in SOL)"
					placeHolder="Enter investment amount"
					value={investment}
					onChange={(e) => setInvestment(e.target.value)}
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

			{profits.solMade !== null && (
				<div className="mt-6 p-4 bg-gray-700 text-gray-200 rounded-lg">
					<h3 className="text-lg font-semibold text-neonGreen">Results:</h3>
					<p className="mt-2">
						You will make:{" "}
						<span className="font-bold text-green-400">{profits.solMade.toFixed(2)} SOL</span>
					</p>
					<p className="mt-2">
						Total SOL:{" "}
						<span className="font-bold text-green-400">{profits.totalSol?.toFixed(2)} SOL</span>
					</p>
					<p className="mt-2">
						You will make:{" "}
						<span className="font-bold text-green-400">${profits.usdMade?.toFixed(2)}</span>
					</p>
					<p className="mt-2">
						Percent Profit:{" "}
						<span className="font-bold text-green-400">
							{profits.percentProfit?.toFixed(2)}%
						</span>
					</p>
				</div>
			)}
		</div>
	);
};

export default MarketCapProfits;
