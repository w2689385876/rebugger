export default{
  port: 3000,
  database: {
    HOST: '127.0.0.1',  //数据库地址
    PORT: '3306',
    USER: 'root', //数据库用户
    PASSWORD: '18819640516', //数据库密码
    DATABASE: 'front_logger_db' //选中数据库
  },
  useRedis:false, // 缓存使用 redis
  redis:{
    exprires:60000, //默认缓存时间 单位ms
  },
  secret:"gesafe"
}
