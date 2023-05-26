const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 jours

const cookieOptions = {
  path: "/",
  sameSite: true,
  ...(process.env.DOMAIN_NAME !== "localhost" && {
    domain: process.env.DOMAIN_NAME,
  }),
};

module.exports = {
  cookieOptions,
  expiresIn,
};
