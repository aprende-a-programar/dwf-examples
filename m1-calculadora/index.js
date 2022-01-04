const operaciones = require('./operaciones.js');

function parsearTerminos(texto) {
	const objetoParseado = {};
	for (var i = 0; i < texto.length; i++) {
		const elemento = texto[i];
		if (elemento == '+' || elemento == '-' || elemento == '*' || elemento == '/') {
			objetoParseado.operacion = elemento;
			const numero1 = Number(texto.slice(0, texto.indexOf(elemento)));
			const numero2 = Number(texto.slice(texto.indexOf(elemento) + 1));
			if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
				throw 'Solo se pueden sumar números';
			}
			objetoParseado.primerTermino = numero1;
			objetoParseado.segundoTermino = numero2;
		}
	}
	return objetoParseado;
}

function ejecutarOperacion(objetoOperacion) {
	const mapa = {
		'+': operaciones.sumar,
		'-': operaciones.restar,
		'/': operaciones.dividir,
		'*': operaciones.multiplicar,
	};
	const simbolo = objetoOperacion.operacion;
	const ejecutor = mapa[simbolo];
	const primerNumero = objetoOperacion.primerTermino;
	const segundoNumero = objetoOperacion.segundoTermino;
	return ejecutor(primerNumero, segundoNumero);
}

function main() {
	const operacionParseada = parsearTerminos(process.argv[2]);
	const resultado = ejecutarOperacion(operacionParseada);
	console.log(resultado);
}

main();
