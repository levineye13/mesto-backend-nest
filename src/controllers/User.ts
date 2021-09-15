import { Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
class User {
  @Get()
  public async getAll() {}

  @Get(':id')
  public async getProfile(@Param('id') id: string) {}

  @Post()
  public async create() {}

  @Patch('me')
  public async updateProfile() {}

  @Patch('me/avatar')
  public async updateAvatar() {}
}

export { User };
