export const formatLargeNumber = (value: string) => {
	// Remove non-numeric characters (except the decimal point)
	const inputValue = value.replace(/[^0-9.]/g, "");

	// Format with commas
	if (inputValue) {
		const formattedValue = new Intl.NumberFormat().format(Number(inputValue));
		return formattedValue;
	}
	return value;
};