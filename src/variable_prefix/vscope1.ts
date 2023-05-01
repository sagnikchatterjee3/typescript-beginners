for (var i = 0; i < 10; i++) {
    console.log(i);
}
// i still available outside the block.
console.log(i);

for(let j=0;j<100;j++){
    console.log(j*2);
}
// j is not vailable outside

export { };