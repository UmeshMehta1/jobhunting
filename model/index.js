const User = require("../model/UserModel");
const Job = require("../model/jobModel");


User.hasMany(Job, { foreignKey: 'userId' });
Job.belongsTo(User, { foreignKey: 'userId' });

module.exports = { User, Job };