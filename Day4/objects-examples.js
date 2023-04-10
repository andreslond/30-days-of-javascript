const curso = {
	nombre: "30 días de JS", 
	duración: "20 horas", 
	clases: 100,
	detalles: {
		tecnologias: ["js", "node", "web browser"],
		calificacion: 5,	
	},
	comentarios: ["¡Excelente curso!", "Javscript no es lo mismo que Java", "hola"]
};

//dot notation
console.log(curso.nombre); // "30 días de JS"
//Bracket notation
console.log(curso["nombre"]); // "30 días de JS"