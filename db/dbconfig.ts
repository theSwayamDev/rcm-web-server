import {Sequelize} from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()
const pgServer:Sequelize = new Sequelize(process.env.DATABASE||'', process.env.DBUSER||'', process.env.DBPASS, {
    host: process.env.DBHOST || 'localhost',
    port: parseInt(process.env.DBPORT||'5432'),
    dialect: 'postgres'
})
export default pgServer;