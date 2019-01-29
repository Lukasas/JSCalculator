function Calculator(input, output) {
	this.input = input;
	this.output = output;
	this.nodes = null;

	this.input.val("( 5 * 3 + 22 * 8 ) * 7"); // 7

	this.input.keyup(() => {
		this.parse(this.input.val())
	});

	this.parse = (input = null) => {
		this.nodes = Parser(input || this.input.val());
		this.output.text(Interpret(this.nodes));
	};

	this.step = () => {
	};
}

let Calc = new Calculator(
	$("#inputCalc"),
	$("#outputCalc")
);
Calc.parse();/*
$("#calc").click(() => {
	Calc.parse();
});

$("#step").click(() =>{
	Calc.step();
});*/

