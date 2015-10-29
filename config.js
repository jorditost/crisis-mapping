var config = {};

// CrisisNET application settings
config.crisisnet = {};

// Database settings
config.db = {};

config.crisisnet.apikey = process.env.CRISISNET_API_KEY || '562a2551008ff7336b330c86';

config.db.server = '';
config.db.user = '';
config.db.pass = '';
config.db.database = '';
config.db.prefix = '';

module.exports = config;
