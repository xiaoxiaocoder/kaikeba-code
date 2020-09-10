
// keyof
const obj = {
  a: 18,
  name: 'hello'
}

function get0(o: object, name: string){
  // No index signature with a parameter of type 'string' was found on type 'Number'.ts(7053)
  // ts.config  suppressImplicitAnyIndexErrors: true
  return 0[name]
}

function get<T extends object, K extends keyof T>(o: T, name: K):T[K] {
  return o[name];
}

get0(obj, 'age')


type _Exclude<T, U> = T extends U ? never : T;