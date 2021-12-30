import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { dataPost } from '../models/post.interface';
import { DataService } from '../services/data.service';

@Controller('data')
export class DataController {
    constructor(private dataService:DataService){}
    
    @Post()
    create(@Body() post: dataPost):Observable<dataPost>{
        return this.dataService.createPost(post)
    }
    @Get()
    get(): Observable<dataPost[]>{
        return this.dataService.findAll();
    }
    @Put(':id')
    update(@Body()dataPost: dataPost,@Param('id') id:number):Observable<UpdateResult>{
        return this.dataService.updatePost(id,dataPost)
    }
    @Delete(':id')
    delete(@Param('id') id : number):Observable<DeleteResult>
    {
        return this.dataService.deletePost(id);
    }
}
