export class UserPost {
    _id?: string;
    userId: string;
    caption?: string;
    datePosted: Date;
    media?: string;
    mediaType?: string;
    likes?: [string];

}
