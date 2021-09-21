const helloSentence = "hello there from lighthouse labs";

const typeWriter = function(sentence, i) {
  if (i <= sentence.length) {
    setTimeout(() => {
      let char = sentence.charAt(i);
      process.stdout.write(char);
      i++;
      typeWriter(sentence, i++);
    }, 200);
  } else {
    process.stdout.write('\n');
  }
};
// console.log();

typeWriter(helloSentence, 0);
