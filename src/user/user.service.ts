import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {  User } from 'src/schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private  userModel:Model<User>,){}
  create(createUserDto: CreateUserDto):Promise<User> { 
    const saltOrRounds = 10;
    createUserDto.password=bcrypt.hashSync(createUserDto.password, saltOrRounds);
    var user=new this.userModel(createUserDto);
    return user.save();

  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
   return this.userModel.findById(id);
  }
  async findByEmail(email: string):Promise<User> {
    console.log(email);
    var user=await this.userModel.findOne({email:email});
  
    if(!user) throw new NotFoundException();
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
