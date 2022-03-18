class ElectricAp {
    constructor(name){
        this.name = name;
        this.voltage = 220;
    }
    turnOn(name){
        console.log(`The ${name} is switched on`);
      }
    turnOff(name){
        console.log(`The ${name} is switched off`);
      }
    calcConsumedPower(name, amperage){
        console.log(`Consumed power of ${name} is ${this.voltage*amperage} watt.`);
    }
}

class PowerfulAp extends ElectricAp{
    constructor(name, amperage){
        super(name);
        this.amperage = amperage;
    }
    turnOn(name){
        console.log(`The ${name} is switched on, be carefull`)
    }
  calcConsumedPower(name, amperage){
        console.log(`Consumed power of ${name} is ${this.voltage*amperage} watt. PowerfulAp class`);
    }
    
}

const iron = new PowerfulAp('iron', 7);
const lamp = new ElectricAp('Lamp', 0.109);

iron.turnOn('Iron')
lamp.turnOff('Lamp')

console.log(iron)
console.log(lamp)

iron.calcConsumedPower('Iron', 7)
lamp.calcConsumedPower('Lamp', 0.109)