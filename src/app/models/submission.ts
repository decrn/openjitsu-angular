import { Item } from './item';

export class Submission extends Item {
    name: string;
    title: string;
    description: string;
    related: Submission[];
    image: string;
    video: string;

    constructor(name: string, title: string) {
        super(name, title);
    }
}
