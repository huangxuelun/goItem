module.exports = app => {
  	app.beforeStart(async () => {
    	// 从配置中心获取 MySQL 的配置
   		// const mysqlConfig = await app.configCenter.fetch('mysql');
    	app.mysql = app.mysql.createInstance(app.config.mysql.client);
  	});
};