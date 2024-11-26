import React from 'react'
import ContactForm from './ContactForm'
import Forest from './Forest'

const Contact = () => {
	return (
		<div className='w-full sm:px-10 md:px-18'>
			<h1 className="mb-16 text-center">Contact</h1>
			<div className='w-full flex flex-col lg:flex-row h-[500px] gap-4'>
				<div className='z-20 h-full w-full flex justify-center lg:justify-start lg:items-end'>
					<ContactForm />
				</div>
				<div className='z-10 flex justify-center lg:justify-end mt-10 lg:mt-0'>
					<Forest />
				</div>
			</div>

		</div>
	)
}

export default Contact
