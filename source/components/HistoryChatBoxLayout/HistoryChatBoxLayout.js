import React, {useState, useEffect} from 'react';
import {Text, Box} from 'ink';
import useResizeTerminal from '../../hooks/useResizeTerminal.js';
import {Markdown} from '../Markdown/Markdown.js';

function HistoryChatBoxLayout({chatMessage}) {
	const {rows, columns} = useResizeTerminal();
	const [scrollOffset, setScrollOffset] = useState(0);

	const height = Math.min(Math.floor(rows * 0.7), rows - 4);

	useEffect(() => {
		setScrollOffset(0);
	}, [chatMessage.length, rows]);

	const visibleMessages = chatMessage.slice(
		Math.max(chatMessage.length - height - scrollOffset, 0),
		chatMessage.length - scrollOffset,
	);

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
						<Text wrap="wrap">
							<Markdown>{msg}</Markdown>
						</Text>
					</Box>
				))}
			</Box>
		</>
	);
}

export default HistoryChatBoxLayout;
