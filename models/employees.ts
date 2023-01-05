import {Sequelize, DataTypes} from 'sequelize';
import pgServer from '../db/dbconfig';

const employeeSchema = pgServer.define('Rcm_Employee_Table', {
    phoneNumber:{
        type: DataTypes.NUMBER({length: 10}),
        allowNull: false,
        primaryKey: true
    },
    employeeName:{
        type: DataTypes.STRING(255)
    },
    employeeRank:{
        type: DataTypes.STRING(255)
    },
    designation:{
        type: DataTypes.STRING(255)
    },
    supervisorNumber:{
        type: DataTypes.NUMBER({length: 10})
    }
})
export default employeeSchema;