import { Author } from './author.model';
import { Image } from './image.model';

export class Gallery {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public images?: Image[],
        public author?: Author,
        public created_at?: Date,
        public updated_at?: Date
    ) {}
}