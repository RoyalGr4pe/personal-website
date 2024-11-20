"use client"

import { useState } from "react";

const CalculateMarketCap = () => {
  // States to store calculated results
  const [requiredMarketcap, setRequiredMarketcap] = useState<number | null>(null);

  // Handle Buy Market Cap input change and format with commas
  const handleMarketCapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters (except the decimal point)
    let inputValue = e.target.value.replace(/[^0-9.]/g, "");

    // Format with commas
    if (inputValue) {
      const formattedValue = new Intl.NumberFormat().format(Number(inputValue));
      e.target.value = formattedValue;
    }
  };

  // Calculate the required market cap for profit
  const calculateMarketcapForProfit = (
    buyMarketcap: number,
    investment: number | undefined,
    buyFee: number | undefined,
    sellFee: number | undefined,
    sellPercentage: number | undefined
  ): number => {
    if (investment === undefined || buyFee === undefined || sellFee === undefined || sellPercentage === undefined) {
      return 0; // Return 0 if any of the fields are undefined
    }
    const sellPercentageDecimal = sellPercentage / 100;
    const totalCost = investment + buyFee + sellFee;
    const requiredProceeds = totalCost;

    // Calculate the required market cap
    return buyMarketcap * (requiredProceeds / (sellPercentageDecimal * investment));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Get input values from the form elements
    const form = e.target as HTMLFormElement;
    const buyMarketcapString = (form.elements.namedItem("buyMarketcap") as HTMLInputElement).value;
    const investment = parseFloat((form.elements.namedItem("investment") as HTMLInputElement).value);
    const buyFee = parseFloat((form.elements.namedItem("buyFee") as HTMLInputElement).value);
    const sellFee = parseFloat((form.elements.namedItem("sellFee") as HTMLInputElement).value);
    const sellPercentage = parseFloat((form.elements.namedItem("sellPercentage") as HTMLInputElement).value);

    // Remove commas from buyMarketcap and parse it as a number
    const numericMarketcap = parseFloat(buyMarketcapString.replace(/,/g, ""));

    // Ensure numericMarketcap is a valid number
    if (!isNaN(numericMarketcap)) {
      const result = calculateMarketcapForProfit(
        numericMarketcap,
        investment,
        buyFee,
        sellFee,
        sellPercentage
      );
      setRequiredMarketcap(result);
    } else {
      alert("Please enter a valid market cap.");
    }
  };

  // Input class for styling
  const inputClass =
    "w-full px-4 py-2 text-base bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-neonGreen focus:border-transparent transition duration-300";

  return (
    <div className="min-h-screen bg-[#1f2225] flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-lg bg-gray-800 text-gray-200 shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-neonGreen mb-4">Market Cap Calculator</h1>
        <p className="text-gray-400 mb-6">
          Calculate the market cap required to break even and keep the remaining as profit.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Buy Market Cap ($)</label>
            <input
              name="buyMarketcap"
              placeholder="Enter buy market cap"
              className={inputClass}
              onInput={handleMarketCapChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Investment (in SOL)</label>
            <input
              name="investment"
              placeholder="Enter investment amount"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Buy Fee (in SOL)</label>
            <input
              name="buyFee"
              placeholder="Enter buy fee"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Sell Fee (in SOL)</label>
            <input
              name="sellFee"
              placeholder="Enter sell fee"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Sell Percentage (%)</label>
            <input
              name="sellPercentage"
              placeholder="Enter sell percentage"
              className={inputClass}
            />
          </div>

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
    </div>
  );
};

export default CalculateMarketCap;
