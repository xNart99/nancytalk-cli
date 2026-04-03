import {useEffect, useState} from 'react';
import {useStdout} from 'ink';

const useResizeTerminal = () => {
	const {stdout} = useStdout();

	const [size, setSize] = useState({
		rows: stdout.rows,
		columns: stdout.columns,
	});

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
