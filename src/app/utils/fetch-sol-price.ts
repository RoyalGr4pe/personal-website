import axios from 'axios';

/*
 * Fetches the current price of Solana (SOL) in USD from the CoinGecko API.
 * 
 * returns The current SOL price in USD or null if there's an error.
*/
const fetchSolPrice = async (): Promise<number | null> => {
	try {
		const response = await axios.get(
			"https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
		);
		return response.data.solana.usd;
	} catch (error) {
		console.error("Error fetching SOL price:", error);
		return null;
	}
};

export default fetchSolPrice;
