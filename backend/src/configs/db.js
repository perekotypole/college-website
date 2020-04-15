export const development = {
  uri: process.env.DEV_DB_URI || 'mongodb://root:testPass@localhost:27017/kpk_test',
}
export const production = {
  uri: process.env.DEV_DB_URI,
}
