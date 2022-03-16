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

const ownPro = (obj) => {
  for (key in obj){
    if (obj.hasOwnProperty(key)){
      console.log(key, obj[key])
    }
  }
}

ownPro(userHadkevich)
