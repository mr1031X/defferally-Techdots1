export interface User {
    role: string
    full_name: string
    email: string
    password: string
}
export interface UserInformationInputs {
    role: string
    full_name: string
    email: string
    password: string
}
export interface UserPasswordInputs {
    password: string
}
export interface UserRoleInputs {
    role: string
}