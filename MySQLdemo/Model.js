model.addSQLCatalog("mysqldb", {
    hostname: '127.0.0.1',
    user: 'root',
    password: 'fredo',
    database: 'sugarcrm',
    port: 3306,
    ssl: false,
    dbType: 'mysql'
});
