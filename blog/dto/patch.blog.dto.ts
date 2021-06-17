import { PutBlogDto } from './put.blog.dto';

// The use of Partial here means use all the fields from put dto and make them all optional
export interface PatchBlogDto extends Partial<PutBlogDto> {}