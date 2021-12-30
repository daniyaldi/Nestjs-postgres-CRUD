import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { DataPostEntity } from '../models/post.entity';
import {dataPost} from '../models/post.interface'
@Injectable()
export class DataService {
    constructor(
    @InjectRepository(DataPostEntity)   
    private readonly dataPostRepository: Repository<DataPostEntity> ){}
    

    createPost(dataPost : dataPost): Observable<dataPost>{
        return from( this.dataPostRepository.save(dataPost)); 
    }
    findAll(): Observable<dataPost[]>{
        return from(this.dataPostRepository.find());
    }
    updatePost(id:number, dataPost:dataPost):Observable<UpdateResult>{
        return from(this.dataPostRepository.update(id,dataPost))
    }
    deletePost(id: number):Observable<DeleteResult>{
        return from(this.dataPostRepository.delete(id));
    }
}
