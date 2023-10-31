export interface IUser {
    name: string;
    phone?: string;
    email: string;
    address?: string;
    password: string;
    confirmPassword: string;
    notifications?: string;
    agreement: boolean;   
}