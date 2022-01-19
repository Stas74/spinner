let animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

let delay = 100;
for (const char of animation) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 200;
}

setTimeout(() => {
  console.log('');
}, delay);