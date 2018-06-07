// try it out #2
function lifetimeCalculator(age, dailyUse) {
  if(!isNaN(age) && !isNaN(dailyUse)){
    const death = 80;
    returnv(death - age) * (dailyUse *365);
  }else {
    userAge =prompt('how old are you?', '23');
    userUse= prompt("How much do you use everyday?");
    lifetimeCalculator(parseInt(userAge)), parseInt(userUse);
  }
};
let userAge =prompt('how old are you?', '23');
let userUse= prompt("How much do you use everyday?", '1');
let usuage= lifetimeCalculator(parseInt(userAge), parseInt(userUse));
