export const development = {
  uri: process.env.DEV_DB_URI || 'mongodb+srv://politekh:politekhPass@kpk-759fk.mongodb.net/kpk_test',
}
export const production = {
  uri: process.env.DEV_DB_URI,
}
