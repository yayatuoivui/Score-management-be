module.exports = (sequelize, DataTypes) => {
    const Score = sequelize.define('Score', {
      user_id: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      subject_id: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      process: DataTypes.FLOAT,
      midterm: DataTypes.FLOAT,
      final: DataTypes.FLOAT,
      date: DataTypes.DATE
    }, {
      timestamps: false,  
      freezeTableName: true, 
      tableName: 'score'
    });
  
    Score.associate = function(models) {
      Score.belongsTo(models.Subject, {
        foreignKey: 'subject_id'
      });
    };
  
    return Score;
  };
