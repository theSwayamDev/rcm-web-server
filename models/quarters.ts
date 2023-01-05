import { Sequelize, DataTypes } from 'sequelize';
import pgServer from '../db/dbconfig';

const quarterSchema = pgServer.define('Rcm_Quarter_Table', {
    quarterNumber:{
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true
    },
    quarterType:{
        type: DataTypes.STRING(20)
    },
    colonyName:{
        type: DataTypes.STRING(255)
    },
    occupiedBy:{
        type: DataTypes.NUMBER({length: 10})
    },
    maintainedBy:{
        type: DataTypes.NUMBER({ length: 10 }) 
    },
    plintArea:{
        type: DataTypes.DECIMAL(5,3)
    }
})
export default quarterSchema;