import { Document } from 'mongoose';

export interface Post extends Document {
  readonly title: string;
  readonly content: string;
  readonly uploadTime: string;
  image: string;
}


