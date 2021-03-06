import React from 'react'
import { Flex, Text, Link } from './system'
import {links} from './bridge'

const Button = props =>
	<Link
		as={props.element}
		p={{all: 1, sm: 2}}
		mr={2}
		bg='rgba(255,255,255,.96)'
		variant='desc'
		flexes='rcc'
		sx={{
			display: 'flex',
			outline: '1px dashed',
			outlineColor: 'blacks.2',
			':hover': {
				bg: `${props.element === 'div' ? 'white' : 'orange'}`,
				color: `${props.element === 'div' ? 'black' : 'white'}`,
			},
			':last-child': { mr: 0 }
		}}
		{...props}
	/>

Button.defaultProps = {
	element: 'a',
}

export default function Nav() {
	return(
		<Flex
			pt={2}
			px={2}
			flexes='rsc'
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				zIndex: 3,
				}}
		>
			<Button href={links.subscribe.href}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9.74075 24.7407C9.74075 24.531 9.75103 24.324 9.77106 24.1201C9.87632 23.0487 8.95136 22.1237 7.87994 22.229C7.67605 22.249 7.46901 22.2593 7.25926 22.2593C3.80237 22.2593 1 19.4569 1 16C1 12.5431 3.80237 9.74076 7.25926 9.74076C7.46899 9.74076 7.67602 9.75104 7.87991 9.77107C8.95132 9.87633 9.87628 8.95136 9.77102 7.87995C9.75098 7.67605 9.7407 7.46901 9.7407 7.25926C9.7407 3.80237 12.5431 1 16 1C19.4569 1 22.2592 3.80237 22.2592 7.25926C22.2592 7.469 22.2489 7.67604 22.2289 7.87994C22.1236 8.95136 23.0486 9.87633 24.12 9.77106C24.3239 9.75103 24.531 9.74075 24.7407 9.74075C28.1976 9.74075 31 12.5431 31 16C31 19.4569 28.1976 22.2593 24.7407 22.2593C24.531 22.2593 24.324 22.249 24.1201 22.229C23.0487 22.1237 22.1237 23.0487 22.229 24.1201C22.249 24.324 22.2593 24.531 22.2593 24.7407C22.2593 28.1976 19.4569 31 16 31C12.5431 31 9.74075 28.1976 9.74075 24.7407ZM13.5185 16C13.5185 16.2098 13.5082 16.4168 13.4882 16.6207C13.383 17.6921 14.3079 18.6171 15.3793 18.5118C15.5832 18.4918 15.7903 18.4815 16 18.4815C16.2097 18.4815 16.4168 18.4918 16.6207 18.5118C17.6921 18.617 18.617 17.6921 18.5118 16.6207C18.4917 16.4168 18.4815 16.2098 18.4815 16C18.4815 15.7903 18.4917 15.5832 18.5118 15.3793C18.617 14.3079 17.6921 13.3829 16.6206 13.4882C16.4167 13.5082 16.2097 13.5185 16 13.5185C15.7902 13.5185 15.5832 13.5082 15.3793 13.4882C14.3079 13.383 13.3829 14.3079 13.4882 15.3793C13.5082 15.5832 13.5185 15.7903 13.5185 16Z"
						stroke="#FB4926"
						strokeWidth="2"
					/>
				</svg>
				<Text as='span' pl={2}>{links.subscribe.name}</Text>
			</Button>
			{/* <Button element='div'>Launching this year</Button> */}
		</Flex>
		)
}