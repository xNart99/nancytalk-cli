import React, {useState, useEffect} from 'react';
import {Box} from 'ink';
import HistoryChatBoxLayout from './components/HistoryChatBoxLayout/HistoryChatBoxLayout.js';
import InputChatLayout from './components/InputChatLayout/InputChatLayout.js';
import {helloGPT} from './helpers/constants.js';
import askNancyQuestion from './helpers/request.js';

export default function App() {
	const [message, setMessage] = useState([]);

	const handleSend = msg => {
		msg = 'USER >> ' + msg;
		setMessage(preMess => [...preMess, msg]);
	};

	useEffect(() => {
		if (message.length === 0) return;

		if (!message.at(-1).startsWith('USER >> ')) return;

		setMessage(preMess => [
			...preMess,
			'Nancy >> **Nancy dang si nghi cho nancy xiu nha! <3**',
		]);

		const filterMessage = [
			helloGPT + 'Day la cau hoi cua tao: ' + message.at(-1),
		];
		filterMessage[0].replace('USER >> ', '');

		// console.log(filterMessage[0]);
		// console.log(typeof filterMessage[0]);

		const fetchAnswer = async () => {
			const answer = await askNancyQuestion(filterMessage);
			setMessage(preMess => [...preMess.slice(0, -1), 'Nancy >> ' + answer]);
		};

		fetchAnswer();
	}, [message]);

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
