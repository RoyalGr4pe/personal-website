interface CheckboxProps {
	label: string
	checked: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
	return (
		<div className="inline-flex items-center">
			<label
				className="relative flex cursor-pointer items-center rounded-full p-3"
				htmlFor="ripple-on"
				data-ripple-dark="true"
			>
				<input
					id="checkboxInput"
					type="checkbox"
					className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-gray-600 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-400 before:opacity-0 before:transition-opacity checked:border-neonGreen checked:bg-neonGreen checked:before:bg-gray-400 hover:before:opacity-10"
					checked={checked}
					onChange={onChange}
				/>
				<span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-3.5 w-3.5"
						viewBox="0 0 20 20"
						fill="currentColor"
						stroke="currentColor"
						strokeWidth="1"
					>
						<path
							fillRule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</span>
			</label>
			<label
				htmlFor="checkboxInput"
				className="ml-3 text-gray-200 text-sm font-medium peer-checked:text-neonGreen transition duration-300"
			>
				{label}
			</label>
		</div>
	)
}

export default Checkbox
