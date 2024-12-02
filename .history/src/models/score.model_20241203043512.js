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
      timestamps: false,  // This disables createdAt and updatedAt
      freezeTableName: true, // Prevents Sequelize from pluralizing table name
      tableName: 'score'  // Explicitly set the table name
    });
  
    return Score;
  };
