export interface Item {
    name: string;
    title: string;
    description: string;
    related: Item[];
    image: string;
    video: string;
}