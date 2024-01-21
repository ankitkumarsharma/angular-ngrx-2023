export interface AuthType {
    roleDetails: AuthRoleType,
    isAuth: boolean,
    userName: string,
    accessPagesList: AuthAccessPagesType[]
}
export interface LoginType {
    userName: string,
    password: string,
}
export interface AuthRoleType {
    role?: string,
    department?: string,
}
export interface AuthAccessPagesType {
    pageId?: string,
    pageName?: string,
}