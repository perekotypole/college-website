export const hash = {
  hashSize: process.env.PASSWORD_HASH_SIZE || 10,
}
export const token = {
  access: {
    secret: process.env.TOKEN_SECRET || 'tokenSecret',
    time: process.env.TOKEN_TIME || 20,
  },
}
