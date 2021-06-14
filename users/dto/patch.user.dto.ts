import { PutUserDto } from './put.user.dto';

// The use of Partial here means use all the fields from put dto and make them all optional
export interface PatchUserDto extends Partial<PutUserDto> {}