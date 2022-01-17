import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatsRepository } from 'src/cats/cats.repository';
import { Comments } from '../comments.schema';
import { CommentsCreateDto } from '../dtos/comments.create.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name) private readonly commentsModel: Model<Comments>,
    private readonly catsRepository: CatsRepository,
  ) {}

  async getAllComments() {
    try {
      const comments = await this.commentsModel.find();
      return comments;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createComment(id: string, comments: CommentsCreateDto) {
    return;
  }

  async plusLike(id: string) {}
}
