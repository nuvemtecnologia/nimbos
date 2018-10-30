export default function sum(a, b, callback) {
  if(callback){
    callback(a+b);
  }
  return a + b;
}
