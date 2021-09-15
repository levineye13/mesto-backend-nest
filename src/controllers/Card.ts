import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('cards')
class Card {
  @Get()
  public async getAll() {}

  @Post()
  public async create() {}

  @Delete(':id')
  public async delete(@Param() id: string) {}

  @Put(':id/likes')
  public async like(@Param() id: string) {}

  @Delete(':id/likes')
  public async dislike(@Param() id: string) {}
}

export { Card };
