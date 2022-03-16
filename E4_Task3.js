function emptyObj() {
  const obj = {};
  return obj;
}

const object = emptyObj();
object.a = 100;

console.log(object.a)
console.log(typeof object);
console.log(object);
