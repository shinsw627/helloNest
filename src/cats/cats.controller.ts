import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Put,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @UseFilters(HttpExceptionFilter)
  getAllCat() {
    if ('') {
      throw new HttpException('Unauthorized', 401);
    }

    return 'all cat';
  }
  //ParseIntPipe 가 타입을 넘버로 바꾼다.
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param) {
    console.log(param);
    return 'one cat';
  }

  @Put()
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}
