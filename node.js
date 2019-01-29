const nodeType = {
	Number: 0,
	Bracket: 1,
	Operator: 2
};

function Node(type, value) {
	this.type = type;
	this.value = value;
}