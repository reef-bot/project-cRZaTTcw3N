const mongoose = require('mongoose');
const config = require('../config/config.json');

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const moderationLogSchema = new mongoose.Schema({
  // Define schema for moderation logs
});

const ModerationLog = mongoose.model('ModerationLog', moderationLogSchema);

module.exports = ModerationLog;