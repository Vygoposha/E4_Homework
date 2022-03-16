function ElectricAp(name){
  this.name = name,
  this.voltage = 220
}

ElectricAp.prototype.turnOn = function(name){
  console.log(`The ${name} is switched on`);
}
ElectricAp.prototype.turnOff = function(name){
  console.log(`The ${name} is switched off`);
}

function PowerfulAp(name, amperage){
  this.name = name,
  this.amperage = amperage
}

PowerfulAp.prototype = new ElectricAp()
PowerfulAp.prototype.turnOn = function(name){
  console.log(`The ${name} is switched on, be carefull`);
}

PowerfulAp.prototype.calcConsumedPower = function(name, amperage){
  console.log(`Consumed power of ${name} is ${this.voltage*amperage} watt. PowerfulAp example`);
}

ElectricAp.prototype.calcConsumedPower = function(name, amperage){
  console.log(`Consumed power of ${name} is ${this.voltage*amperage} watt`);
}

const iron = new PowerfulAp('Iron', 7);
const lamp = new ElectricAp('Lamp');

iron.turnOn('Iron')
lamp.turnOn('Lamp')

console.log(iron)
console.log(lamp)

iron.calcConsumedPower('Iron', 7)
lamp.calcConsumedPower('Lamp', 0.109)
