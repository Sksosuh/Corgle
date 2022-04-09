import { Injectable, NotFoundException } from "@nestjs/common";
import { Dog } from './dog.model';
import { InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class DogsService{
    private dogs: Dog[] = [];

    constructor(
        @InjectModel('Dog') private readonly dogModel: Model<Dog>
        ) {}

    async getDogs(){
        const result = await this.dogModel.find().exec();
        console.log(result);
        return result.map(dog => ({
            id: dog.id,
            name: dog.name,
            description: dog.description,
            image: dog.image,
            rating_value: dog.rating_value,
            rating_amount: dog.rating_amount,
        }));
    }

    async getSingleDog(dogId: string){
        const dog = await this.findDog(dogId)
        return dog;
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

    private async findDog(id: string): Promise<Dog>{
        let dog;
        try { dog = await this.dogModel.findById(id).exec()
        } catch (error){
            throw new NotFoundException('Could not find product');
        }
        if (!dog){
            throw new NotFoundException('Could not find product.');
        }

        return dog;
    }
}