import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { DogSchema } from './dog.model';

@Module({
    imports: [
        DogsModule,
        MongooseModule.forFeature([{name: 'Dog', schema: DogSchema}]),
        MongooseModule.forRoot('mongodb+srv://Corgle:CorglePass@cluster0.jwqmo.mongodb.net/corgle?retryWrites=true&w=majority'
        )],
    controllers: [DogsController],
    providers: [DogsService],
})
export class DogsModule{}