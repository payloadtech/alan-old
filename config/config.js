/*
Config is stored as environment variables
*/
module.exports = {
  isProduction : process.env.NODE_ENV === 'true',
  dbUrl : process.env.DATABASE_URL,
  secret : process.env.SECRET,
  memcached : {
    host: process.env.MEMCACHEDCLOUD_SERVERS,
    user: process.env.MEMCACHEDCLOUD_USERNAME,
    pass: process.env.MEMCACHEDCLOUD_PASSWORD
  }
};
