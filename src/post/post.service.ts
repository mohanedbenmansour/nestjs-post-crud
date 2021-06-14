import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { Post } from 'src/types/post';
import {PostDTO} from './post.dto';
@Injectable()
export class PostService {

    constructor(@InjectModel('Post') private postModel: Model<Post>) {}


async createPost(PostDTO: PostDTO) : Promise<any>{
    const post = new this.postModel(PostDTO);
    post.image = "url";
    return await post.save();
}

async findAllPosts(): Promise<any>{
   return  await this.postModel.find().exec();
   
}

async findPostById(id): Promise<any>{
    return await this.postModel.findById(id).exec();
}

async updatePost(PostDTO: PostDTO,id): Promise<any>{
    const filter = { _id: id };
    return await this.postModel.findOneAndUpdate(filter,PostDTO);
}

async deletePost(id): Promise<any>{
    return await this.postModel.findByIdAndRemove(id);
}

}
