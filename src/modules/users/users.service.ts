import { LeanDocument, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas';

type UserDocument = Promise<Omit<LeanDocument<User>, 'password'>>;

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly usersModel: Model<User>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async validateUser(username: string, password: string): Promise<UserDocument | void> {
    const user = await this.usersModel.findOne({ username }).exec();
    if (user && user.password === password) {
      const { ...result } = user.toObject<UserDocument>({ getters: true });
      return result;
    }
  }
}
