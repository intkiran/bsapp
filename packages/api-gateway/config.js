let config = {
  WWW_PORT: process.env.PORT || 8080,
  USERS_URL: process.env.USERS_URL || "http://localhost:9000",
  TASKS_URL: process.env.TASKS_URL || "http://localhost:9001"
};

module.exports = config;
