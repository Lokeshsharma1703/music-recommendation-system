const { spawn } = require("child_process");

const childPython = spawn("python", ["algo.py"]);

let res = "";

childPython.stdout.on("data", (data) => {
  console.log(`stdout : ${data}`);
  res = `${data}`;
});

childPython.stderr.on("data", (data) => {
  console.log(data);
});

childPython.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

setTimeout(() => console.log(res), 10000);
