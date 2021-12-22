import { DocumentBuilder } from '@nestjs/swagger';

export const APP = {
  PORT: 3000,
};

export const SWAGGER_DOCUMENT_CONFIG = (() => {
  const config = new DocumentBuilder();
  config.setTitle('Cats super cute!');
  config.setDescription('The cats API description');
  config.setVersion('1.0');
  config.addTag('cats', '好多好多小猫咪');

  return config.build();
})();

export const MONGO_DB = {
  uri: `mongodb://${process.env.MONGO_URL || 'localhost'}:27017/aliez`,
  username: 'root',
  password: `12345678`,
};
