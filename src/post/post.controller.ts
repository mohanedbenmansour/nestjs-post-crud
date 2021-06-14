import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Post,Put,Query,Req,Res,UploadedFile,UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

import { PostDTO } from './post.dto';
export const storage = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const filename: string = file.originalname;

      cb(null, `${filename}`);
    },
  }),
};
@Controller('post')
export class PostController {
    constructor(private postService: PostService) {}

    @Get('all')
    async getAllPosts(@Res() res) {
      const posts= await this.postService.findAllPosts();
      if(!posts)  throw new NotFoundException('no posts');
      return res.status(HttpStatus.OK).json(posts);
    }
    @Get("id")
    async getPostById(@Res() res,@Query('id') id: string){
        const post =await this.postService.findPostById(id);
        if(!post) throw new NotFoundException('Post does not exist');
        return res.status(HttpStatus.OK).json(
           
            post
        );
    }
    
    @Post('new')
    @UseInterceptors(FileInterceptor('image', storage))
    async createPost(@Body() postDTO: PostDTO, @UploadedFile() file, @Req() req,@Res() res) {
      const url =
        req.protocol + '://' + req.get('host') + '/' + file.originalname;
      // '/uploads/postimages/' +
      const post = await this.postService.createPost(postDTO, url);
  
      return res.status(HttpStatus.OK).json({
        message: "Post has been created successfully",
        post
        })
    }
    @Put('update')
    @UseInterceptors(FileInterceptor('image', storage))
    async updatePost(@Body() postDTO: PostDTO, @UploadedFile() file, @Req() req,@Res() res,@Query('id') id: string) {
      const url =
        req.protocol + '://' + req.get('host') + '/' + file.originalname;
      // '/uploads/postimages/' +
      const post = await this.postService.updatePost(postDTO, url,id);
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
