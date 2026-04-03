import React, {useState} from 'react';
import {Text, Box} from 'ink';
import useResizeTerminal from '../../hooks/useResizeTerminal.js';

function HistoryChatBoxLayout({chatMessage}) {
	const {rows, columns} = useResizeTerminal();
	const [scrollOffset, setScrollOffset] = useState(0);

	const height = Math.floor(rows * 0.7);

	React.useEffect(() => {
		setScrollOffset(0);
	}, [chatMessage]);

	const visibleMessages = chatMessage.slice(
		Math.max(chatMessage.length - rows - scrollOffset, 0),
		chatMessage.length - scrollOffset,
	);
	console.error('Rows:', rows);
	console.error('chatMessage Length:', chatMessage.length);
	console.error(chatMessage);

	return (
		<>
			<Box
				marginTop={0}
				marginX={1}
				borderStyle="round"
				borderColor="green"
				flexDirection="column"
				overflowY="auto"
				paddingX={1}
				height={height}
			>
				{visibleMessages.map((msg, i) => (
					<Box key={i} width="100%">
						<Text wrap="wrap">{msg}</Text>
					</Box>
				))}
			</Box>
		</>
	);
}

export default HistoryChatBoxLayout;
