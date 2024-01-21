// log in
export interface ILoginBody {
  username: string
  password: string
}

export interface ILoginArgs {
  body: ILoginBody
}

// sign up
export interface ISignupBody {
  name: string
  username: string
  password: string
}

export interface ISignupArgs {
  body: ISignupBody
}