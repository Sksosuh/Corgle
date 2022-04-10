import { Injectable, NotFoundException } from "@nestjs/common";
import { Dog } from './dog.model';
import { InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nextTick } from "process";
import { identity } from "rxjs";



@Injectable()
export class DogsService{
    private dogs: Dog[] = [];

    constructor(
        @InjectModel('Dog') private readonly dogModel: Model<Dog>
      ) {}

    async getDogs(){
        const result = await this.dogModel.find().exec();
        return result.map(dog => ({
            dog_tag: dog.dog_tag,
            name: dog.name,
            description: dog.description,
            source_link: dog.source_link,
            donation_link: dog.donation_link,
            alternate_texts: dog.alternate_texts,
            rating_value: dog.rating_value,
            rating_count: dog.rating_count,
        }));
    }

    async getSingleDog(dogId: number){
        const result = await this.dogModel.findOne({dog_tag: dogId}).exec();
        console.log("getSingleDog: %s", dogId);
        console.log("dog: %s",result);
        console.log("insingleDog");
        return {
            dog_tag: result.dog_tag,
            name: result.name,
            description: result.description,
            source_link: result.source_link,
            donation_link: result.donation_link,
            alternate_texts: result.alternate_texts,
            rating_value: result.rating_value,
            rating_count: result.rating_count,
        };
    }

    updateDog(dogId: string, name: string, desc: string, image: string, rating_value: number, rating_amount: number){
        //const [dog, index] = this.findDog(dogId);
        //const updatedDog = { ...dog };
        //if (rating_value){
            //updatedDog.rating_value = rating_value;
        //}
        //if (rating_amount){
            //updatedDog.rating_amount = rating_amount;
        //}

        //this.dogs[index] = updatedDog;
    }

    async randDog(counter: number){
        const dog = await this.dogModel.findOne();
        console.log(dog);
        return {
            dog_tag: dog.dog_tag,
            name: dog.name,
            description: dog.description,
            source_link: dog.source_link,
            donation_link: dog.donation_link,
            alternate_texts: dog.alternate_texts,
            rating_value: dog.rating_value,
            rating_count: dog.rating_count,
        }
    }

    //private async findDog(dogId: string): Promise<Dog>{
        //let result = await this.dogModel.find({ name: "Graham" }).exec();
        //try { 
            //console.log(dogId);
            //result = await this.dogModel.find({ id: dogId }).exec();
        //} catch (error){
            //throw new NotFoundException('Could not find product.');
        //}
        //if (!result){
            //throw new NotFoundException('Could not find product.');
        //}
        //console.log(result);
        //return result;
    //}
}