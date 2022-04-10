import * as mongoose from 'mongoose';


export const DogSchema = new mongoose.Schema({
    dogTag: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true},
    source_link: { type: String, required: true},
    donation_link: { type: String, required: false},
    media_links: { type: String, required: false},
    alternate_texts: { type: String, required: false},
    rating_value: { type: Number, required: true},
    rating_count: { type: Number, required: true}
})

export interface Dog extends mongoose.Document {
    dogTag: number;
    name: string;
    description: string;
    source_link: string;
    donation_link: string;
    media_links: string;
    alternate_texts: string;
    rating_value: number;
    rating_count: number;
} 