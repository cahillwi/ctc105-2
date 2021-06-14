// describes what a user should look like at a minimum but not a blueprint like a class is.
export interface CreateUserDto {
    id: string;
    email: string;
    password: string;
    // Everything below denoted with a ? means this is an optional properties
    firstName?: string;
    lastName?: string;
    permissionLevel?: number;
}