import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { Post } from 'src/types/post';
import {PostDTO} from './post.dto';
@Injectable()
export class PostService {

    constructor(@InjectModel('Post') private postModel: Model<Post>) {}


async createPost(PostDTO: PostDTO, url: string) : Promise<any>{
    const post = new this.postModel(PostDTO);
    post.image = url;
    return await post.save();
}

async findAllPosts(): Promise<any>{
   return  await this.postModel.find().exec();
   
}

async findPostById(id): Promise<any>{
    return await this.postModel.findById(id).exec();
}

async updatePost(PostDTO: PostDTO, url: string,id): Promise<any>{
    const post = new this.postModel(PostDTO);
    post.image = url;
    return await this.postModel.findByIdAndUpdate(id,post, { new: true });
}

async deletePost(id): Promise<any>{
    return await this.postModel.findByIdAndRemove(id);
}

}
