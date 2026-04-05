import React from 'react';
import TerminalRenderer from 'marked-terminal';
import {marked, parse} from 'marked';

export const Markdown = ({children}) => {
	const renderer = new TerminalRenderer();
	const output = marked(children, {renderer}).trim();

	return output;
};
