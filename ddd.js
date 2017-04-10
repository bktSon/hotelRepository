'use strict'
class X {

  getUser () {
    console.log('getUser')
  }

  getDataUser (user) {
    return this.user = user
  }

}

let x = new X();
console.log(typeof x);
