const crypto = require("crypto");

class HmacGenerator {
  static generateHmac(key, choice) {
    return crypto.createHmac("sha256", key).update(choice).digest("hex");
  }
}

module.exports = HmacGenerator;
