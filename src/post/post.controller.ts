import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Post,Put,Query,Req,Res,UploadedFile,UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

import { PostDTO } from './post.dto';

@Controller('post')
export class PostController {
    constructor(private postService: PostService) {}

    @Get('all')
    async getAllPosts(@Res() res) {
      const posts= await this.postService.findAllPosts();
      if(!posts)  throw new NotFoundException('no posts');
      return res.status(HttpStatus.OK).json(posts);
    }
    @Get("fetch-post")
    async getPostById(@Res() res,@Query('id') id: string){
        const post =await this.postService.findPostById(id);
        if(!post) throw new NotFoundException('Post does not exist');
        return res.status(HttpStatus.OK).json(
           
            post
        );
    }
    
    @Post('new')
    async createPost(@Body() postDTO: PostDTO,@Res() res) {
      
      const post = await this.postService.createPost(postDTO);
  
      return res.status(HttpStatus.OK).json({
        message: "Post has been created successfully",
        post
        })
    }
    @Put('update')
    
    async updatePost(@Body() postDTO: PostDTO,  @Req() req,@Res() res,@Query('id') id: string) {

      const post = await this.postService.updatePost(postDTO,id);
       if(!post) throw new NotFoundException('Post does not exist');
      return res.status(HttpStatus.OK).json({
        message: "Post has been updated successfully",
        post
        })
    }



    @Delete("delete")
    async deletePost(@Res() res, @Query('id') id: string){
        const post = await this.postService.deletePost(id);
        if (!post) throw new NotFoundException('Post does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Post has been deleted',
            post
            })
            }
    

}
