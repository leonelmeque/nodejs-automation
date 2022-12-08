const args = process.argv.slice(2);
const [_name] = args;

if (_name === undefined) {
  console.error("Please pass a name, e.g. node hello.js Leonel");
  process.exit(0);
}

console.log(`Good day to you, ${_name}`);
