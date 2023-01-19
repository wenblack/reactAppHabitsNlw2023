import { Plus } from 'phosphor-react'
import logoImage from '../../assets/logo.svg'

export function Header() {
	return (
		<header className='w-full max-w-3xl mx-auto flex items-center justify-between'>
			<img
				src={logoImage}
				alt='logo Application'
				height={16}
				width={116}
			/>
			<button
				type='button'
				className='border border-violet-500 gap-3 font-semibold rounded-lg flex items-center px-6 py-4 hover:border-violet-300'
			>
				<Plus
					className='text-violet-500'
					size={20}
				></Plus>
				New habit
			</button>
		</header>
	)
}
