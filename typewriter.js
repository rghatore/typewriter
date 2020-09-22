const sentence = "hello there from lighthouse labs";
let timeDelay = 0;
for (const char of sentence) {
  // prints each character on the same line - prompt also on same line!
  setTimeout(() => {
    process.stdout.write(char);
  }, timeDelay);
  timeDelay += 50;
};
setTimeout(() => {
  console.log('') // adds a new line by default
}, timeDelay);