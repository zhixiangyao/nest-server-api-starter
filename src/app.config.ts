import { DocumentBuilder } from '@nestjs/swagger';

export const APP = {
  PORT: 3000,
};

export const SWAGGER_DOCUMENT_CONFIG = (() => {
  const config = new DocumentBuilder();
  config.setTitle('Cats super cute!');
  config.setDescription('The cats API description');
  config.setVersion('1.0');
  config.addTag('cats', '猫');
  config.addTag('users', '用户');

  return config.build();
})();

export const MONGO_DB = {
  uri: `mongodb://root:12345678@${process.env.MONGO_URL || 'localhost'}:27017`,
  dbName: 'blog',
  username: 'root',
  password: `12345678`,
};
