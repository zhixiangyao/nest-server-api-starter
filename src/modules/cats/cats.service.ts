import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Cat } from './entities';
import { CreateCatDto, FindCatDto, UpdateCatDto } from './dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private catModel: Model<Cat>) {}

  async createOne(data: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(data);
    return createdCat.save();
  }

  async find(data: FindCatDto): Promise<Cat[]> {
    const { id } = data;
    if (id) return this.catModel.find({ _id: id }).exec();
    return this.catModel.find().exec();
  }

  async deleteOne(id: string): Promise<void> {
    this.catModel.deleteOne({ _id: id }).exec();
  }

  async updateOne(id: string, data: Partial<UpdateCatDto>): Promise<void> {
    const newData = {};

    if (data.age) Object.assign(newData, { age: data.age });
    if (data.breed) Object.assign(newData, { breed: data.breed });
    if (data.name) Object.assign(newData, { name: data.name });

    this.catModel.updateOne({ _id: id }, { $set: newData }).exec();
  }

  getHello(): string {
    return 'Hello World!';
  }

  getHelloText(): { text: string } {
    return {
      text: 'Hello World!',
    };
  }
}
