import { Sequelize, Options } from 'sequelize';

const database: string = 'home';
const username: string = 'chaos';
const password: string = 'dragon2344';
const options: Options = {
  host: '10.10.10.10',
  port: 3306,
  dialect: 'mariadb',
};

const sequelize = new Sequelize(
  database,
  username,
  password,
  options,
);

try {
  sequelize.authenticate()
    .then(() => {
      console.log('success');
    });
} catch (error) {
  console.error(error);
}
