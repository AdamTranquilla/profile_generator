const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :P ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`Thank you for your valuable feedback: ${answer1}\nFav hobby: ${answer2}\nFav song: ${answer3}\nFav meal: ${answer4}\nFav food: ${answer5}\nFav sport: ${answer6}\nSuperPower: ${answer7}\n`);
              rl.close();
            });
          }); // lol whoops
        });
      });
    });
  });
});