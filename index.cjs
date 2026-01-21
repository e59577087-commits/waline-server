const Application = require('@waline/vercel');

module.exports = Application({
  // 在此处显式覆盖数据库配置，确保不被任何默认设置影响
  database: {
    type: process.env.DATABASE_TYPE || 'postgresql', // 显式指定类型，环境变量优先
  },
  plugins: [],
  async postSave(comment) {
    // do what ever you want after comment saved
  },
});
