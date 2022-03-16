const developerMTS = {
  city: 'Irkutsk',
  adress: 'Akademicheskaya, 28/7'
}

const userVygolovskiy = Object.create(developerMTS);
userVygolovskiy.name = 'Igor';
userVygolovskiy['surname'] = 'Vygolovskiy';

const userHadkevich = Object.create(developerMTS);
userHadkevich.name = 'Victor';
userHadkevich['age'] = 28;

const inobj = (obj, str) =>{
  let a = str in obj;
  return a
}

console.log(inobj(userVygolovskiy, 'surname'))
