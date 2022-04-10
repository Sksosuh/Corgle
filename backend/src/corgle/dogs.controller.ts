import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
} from '@nestjs/common';

import { DogsService } from './dogs.service';


@Controller()
export class DogsController{
    constructor(private readonly dogsService: DogsService) {}

    //@Get()
    //async getAllDogs(){
        //const dogs = await this.dogsService.getDogs();
        //return dogs;
    //}

    @Get(':id')
    getDog(@Param('id') dogId: number){
        console.log("getDog: %d", dogId)
        const dog = this.dogsService.getSingleDog(dogId);
        return dog;
    }

    //@Get(':counter')
    //getRandDog(@Param('counter') counter: number){
        //const dog = this.dogsService.randDog(counter);
        //return dog;
    //}
}