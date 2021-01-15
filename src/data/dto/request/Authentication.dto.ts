export interface PostSignIn {
    username: string,
    password: string,
    token: string
}

export interface PostGoogleAuth {
    email: string,
    ggid: string
    name: string
}

export interface PostSignUp {
    phone: string,
    name: string
    password: string
}

export interface PostProfileUpdating {
    userId: string,
    email: string,
    name: string
    password?: string
}