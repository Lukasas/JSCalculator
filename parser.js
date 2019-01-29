function Parser(input) {
	let tokens = [];
	let buffer = "";
	for (c of input) {

		if (c == ' ')
			continue;

		if (!isNaN(Number(c)) || c == '.') {
			buffer += c;
			continue;
		}

		if (buffer.length > 0) {
			tokens = [...tokens, new Node(nodeType.Number, Number(buffer))];
			buffer = '';
		}

		switch (c) {
			case '+':
			case '-':
			case '*':
			case '/':
				tokens = [...tokens, new Node(nodeType.Operator, c)];
				break;

			case '(':
				tokens = [...tokens, new Node(nodeType.Bracket, c)];
				break;

			case ')':
				tokens = [...tokens, new Node(nodeType.Bracket, c)];
				break;

		}
	}

	if (buffer.length > 0) {
		tokens = [...tokens, new Node(nodeType.Number, Number(buffer))];
		buffer = '';
	}

	//console.table(tokens);
	return InfixToPostfix(tokens);
}

function InfixToPostfix(tokens) {

	let prec = {
		"*": 3,
		"/": 3,
		"+": 2,
		"-": 2,
		"(": 1
	};
	let help = [];
	let final = [];
	for (token of tokens) {
		if (token.type == nodeType.Number) {
			final.push(token);
		} else if (token.type == nodeType.Bracket) {
			if (token.value == '(')
			{
				help.push(token);
			} else {
				let top = help.pop();
				while (top.value != "(") {
					final.push(top);
					top = help.pop();
				}
			}
		} else {
			while (help.length > 0 && (prec[help[help.length - 1].value] >= prec[token.value]))
				final.push(help.pop());
			help.push(token);
		}
	}

	while (help.length > 0)
		final.push(help.pop())

	return final;

}