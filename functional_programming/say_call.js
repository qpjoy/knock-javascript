function say(name, message) {
	console.log(name + ' says ' + message);
}

console.log(say.toString());

say.call(null, 'Morgan', 'I like cookies');