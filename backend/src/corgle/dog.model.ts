import * as mongoose from 'mongoose';


export const DogSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true},
    image: { type: String, required: true},
    rating_value: { type: Number, required: true},
    rating_amount: { type: Number, required: true}
})

export interface Dog extends mongoose.Document {
    id: string;
    name: string;
    description: string;
    image: string;
    rating_value: number;
    rating_amount: number;
} 