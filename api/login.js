const { cookieOptions, expiresIn } = require("../utils/constants");
const crypto = require("crypto");

const HASH_TAG = "-hashed";

async function routes(fastify) {
  const firebase = fastify.firebase;

  fastify.post("/login", async (request, reply) => {
    const idToken = request.body.idToken.toString();
    // Set session expiration to 5 days.
    try {
      // Firebase login
      let { uid, email, name } = await firebase.auth().verifyIdToken(idToken);
      if (!email.includes(HASH_TAG) || !name.includes(HASH_TAG)) {
        // Anonymise user email

        // Separating domain from user info
        const prefixUserEmail = email.substring(0, email.indexOf("@"));
        const suffixUserEmail = email.substring(email.indexOf("@"));

        // Hash and salt user infos
        const hashedMail = hashAndSalt(prefixUserEmail);
        const hashedName = hashAndSalt(name);

        // Updating user info with hashed ones
        const userRecord = await firebase.auth().updateUser(uid, {
          email: `${hashedMail}${HASH_TAG}${suffixUserEmail}`,
          displayName: `${hashedName}${HASH_TAG}`,
        });
        request.log.info("Successfully Anonymising user infos");

        return { login: "updated" };
      }

      const sessionCookie = await firebase
        .auth()
        .createSessionCookie(idToken, { expiresIn });
      reply.send({login: "successful", sessionCookie, cookieOptions})
    } catch (e) {
      request.log.error(e);
      reply.status(401).send("UNAUTHORIZED REQUEST!");
    }
  });
}

function hashAndSalt(input) {
  return crypto
    .createHmac("sha256", input) // Hashing
    .update(crypto.randomBytes(64).toString("hex")) // Adding some salt
    .digest("hex")
    .toString(); // Time to eat !
}

module.exports = routes;
