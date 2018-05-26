import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(username, password: String) {
    let users = JSON.parse(localStorage.getItem("users"))

    if (users[username] === password) return true
    else throw "Invalid Credentials"
  }

  register(username, password: String) {
    if (username.length < 5) throw "Username should be greater than 5 characters"
    else if (password.length < 8) throw "Password should be greater than 8 chanracters"
    else {
      let users = JSON.parse(localStorage.getItem("users"))
      if (users[username] !== undefined) throw "Username is already taken"
      else {
        users[username] = password
        localStorage.setItem("users", JSON.stringify(users))
        return true
      }
    }
  }
}
