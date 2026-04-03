import React, {useState} from 'react';
import {Box} from 'ink';
import HistoryChatBoxLayout from './components/HistoryChatBoxLayout/HistoryChatBoxLayout.js';
import InputChatLayout from './components/InputChatLayout/InputChatLayout.js';

export default function App() {
	const [message, setMessage] = useState([]);

	const handleSend = msg => {
		setMessage(preMess => [...preMess, msg]);
	};

	return (
		<>
			<Box
				padding={0}
				margin={0}
				borderStyle="round"
				borderColor="green"
				flexDirection="column"
				height="100%"
				width="100%"
			>
				<HistoryChatBoxLayout chatMessage={message} />
				<InputChatLayout onSend={handleSend} />
			</Box>
		</>
	);
}
