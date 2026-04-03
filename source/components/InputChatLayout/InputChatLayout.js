import React, {useState} from 'react';
import {Text, Box} from 'ink';
import useResizeTerminal from '../../hooks/useResizeTerminal.js';
import TextInput from 'ink-text-input';

const InputChatLayout = ({onSend}) => {
	const {rows, columns} = useResizeTerminal();
	const [message, setMessage] = useState('');

	const height = Math.floor(rows * 0.2);

	const handleSubmit = () => {
		onSend(message);
		setMessage('');
	};

	return (
		<>
			<Box
				paddingX={1}
				paddingBottom={0}
				marginX={1}
				borderStyle="round"
				borderColor="green"
				flexDirection="column"
				height={height}
			>
				<Box width="100%">
					<Text>
						<Text color="green">Message: </Text>
						<TextInput
							placeholder="Type your chat"
							value={message}
							onChange={setMessage}
							onSubmit={handleSubmit}
						/>
					</Text>
				</Box>
			</Box>
		</>
	);
};

export default InputChatLayout;
