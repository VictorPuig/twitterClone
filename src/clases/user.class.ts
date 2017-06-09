export class User {
    name: string;
    email: string;
    username: string;
    img: string;

    constructor(name: string, email: string, username: string, img: string) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.img = img;
    }
}