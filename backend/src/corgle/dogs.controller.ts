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

    @Get()
    async getAllDogs(){
        const dogs = await this.dogsService.getDogs();
        return dogs;
    }

    @Get(':id')
    getDog(@Param('id') dogId: string){
        return this.dogsService.getSingleDog(dogId);
    }
}