import { Author } from './author.model';

export class Gallery {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public images?: string[],
        public author?: Author,
        public created_at?: Date,
        public updated_at?: Date
    ) {}
}
