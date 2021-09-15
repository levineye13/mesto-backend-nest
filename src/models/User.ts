import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import validator from 'validator';

@Schema()
class User {
  @Prop({
    type: String,
    required: [true, 'Поле "name" является обязательным.'],
    minlength: 2,
    maxlength: 30,
  })
  name: string;

  @Prop({
    type: String,
    required: [true, 'Поле "about" является обязательным.'],
    minlength: 2,
    maxlength: 30,
  })
  about: string;

  @Prop({
    type: String,
    required: [true, 'Поле "avatar" является обязательным.'],
    validate: {
      validator: (v: string): boolean => validator.isURL(v),
    },
  })
  avatar: string;
}

const UserSchema = SchemaFactory.createForClass(User);

export { User, UserSchema };
