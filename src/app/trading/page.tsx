import React from 'react'
import MarketCapToBreak from './MarketCapToBreak'
import MarketCapProfits from './MarketCapProfits'


const page = () => {
	return (
		<div className='h-screen flex lg:flex-row flex-col justify-center items-center p-4 gap-4'>
			<MarketCapToBreak />
			<MarketCapProfits />
		</div>
	)
}

export default page
