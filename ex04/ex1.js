function hello() {
    console.log('Hello World');
}
var hello2 = function(name) {
    console.log('Hello ' + name);
}

var hello3 = function(name) {
    console.log(`Hello ${name}!`);
}
hello();
hello2('Omar');
hello3('Monica');