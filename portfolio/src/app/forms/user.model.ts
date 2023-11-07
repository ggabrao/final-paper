export interface IUser {
    name: string;
    phone?: string;
    email: string;
    address?: string;
    addresses?: string[];
    password: string;
    confirmPassword: string;
    notifications?: string;
    agreement: boolean;   
}