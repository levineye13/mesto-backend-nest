import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import validator from 'validator';
import { User } from './User';

const { ObjectId } = mongoose.Schema.Types;

@Schema()
class Card {
  @Prop({
    type: String,
    required: [true, 'Поле "name" является обязательным.'],
    minlength: 2,
    maxlength: 30,
  })
  name: string;

  @Prop({
    type: String,
    required: [true, 'Поле "link" является обязательным.'],
    validate: {
      validator: (v: string): boolean => validator.isURL(v),
    },
  })
  link: string;

  @Prop({
    type: ObjectId,
    required: [true, 'Поле "owner" является обязательным.'],
    ref: 'User',
  })
  owner: User;

  @Prop({
    type: ObjectId,
    required: [true, 'Поле "likes" является обязательным.'],
    default: [],
    ref: 'User',
  })
  likes: User[];

  @Prop({
    type: Date,
    default: Date.now,
  })
  createdAt: Date;
}

export const CardSchema = SchemaFactory.createForClass(Card);
