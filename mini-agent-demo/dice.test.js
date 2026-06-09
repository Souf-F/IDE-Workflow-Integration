const { roll } = require('./dice');

for (let i = 0; i < 5; i++) {
  console.log(`roll(${6}) ->`, roll(6));
}
