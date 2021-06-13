a=[12,4,0,5];
b=[1,2,[4,0]];

console.log('Before cloning');
console.log(a);
console.log(b);

console.log('After Cloning');


var cloneA= a.slice(0);
var cloneB= b.slice(0);

console.log(cloneA);
console.log(cloneB);