// describes what a user should look like at a minimum but not a blueprint like a class is.
export interface PutUserDto {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    permissionFlags: number;
}