import {useEffect, useState} from 'react';
import {useStdout} from 'ink';

// hook use to render terminal size at anytime the terminal resizing.
const useResizeTerminal = () => {
	const {stdout} = useStdout();

	// save up current terminal at start up.
	const [size, setSize] = useState({
		rows: stdout.rows,
		columns: stdout.columns,
	});

	// once the terminal resizing resetting size.
	useEffect(() => {
		const handleResize = () => {
			setSize({
				rows: stdout.rows,
				columns: stdout.columns,
			});
		};

		stdout.on('resize', handleResize);

		return () => {
			stdout.off('resize', handleResize);
		};
	}, [stdout]);

	return size;
};

export default useResizeTerminal;
