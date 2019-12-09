import React from 'react'
import { Box, Flex, Text } from 'rebass'

const Intro = props => {
	return (
		<Flex variant='flexes.ccc' height='100vh'>
			<Flex
				width='200px' height='200px'
				mb={3}
				sx={{
					borderRadius: '999px',
					border: '1px solid',
					borderColor: 'orange',

				}}
			/>
			<Text variant='title'>Freemia School</Text>
			<Text variant='title'>Family Education</Text>
		</Flex>
		)
}

export default Intro