// describes what a blog should look like at a minimum but not a blueprint like a class is.
export interface PutBlogDto {
    id: string;
    title: string;
    body: string;
    authorId: String,
}