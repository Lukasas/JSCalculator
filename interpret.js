const opType = {
	Plus: 0,
	Minus: 1,
	Multi: 2,
	Divid: 3
}

function Instruction(operand1, operator, operand2) {
	this.operand1 = operand1;
	this.operator = operator;
	this.operand2 = operand2;

	this.evaluate = () => {
		switch (operator) {
			case opType.Plus:
				return this.operand1 + this.operand2;
				break;

			case opType.Multi:
				return this.operand1 * this.operand2;
				break;
		}
	};
}

function Evaluate(operand1, operator, operand2) {
	console.log(`${operand2} ${operator} ${operand1}`)
	switch (operator) {
		case '+':
			return operand2 + operand1;
			break;
		case '-':
			return operand2 - operand1;
			break;

		case '*':
			return operand2 * operand1;
			break;

		case '/':
			return operand2 / operand1;
			break;
	}
}



function Tree(root, left, right) {
	this.root = root;
	this.left = left;
	this.right = right;
}

function Interpret(nodes) {
	let stack = [];
	let commands = [];

	for (node of nodes) {
		if (node.type == nodeType.Number) {
			stack.push(node.value);
		} else {
			//commands.push(new Instruction(stack.pop().value, node.value, stack.pop().value))
			stack.push(Evaluate(stack.pop(), node.value, stack.pop()))
		}
	}
	return stack.pop();
}