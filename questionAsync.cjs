const readline = require('readline');

 questionAsync = function(prompt) {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
  
      rl.question(prompt, (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }

module.exports = questionAsync;