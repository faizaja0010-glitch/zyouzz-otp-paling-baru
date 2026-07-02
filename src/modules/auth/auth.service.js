const prisma = require("../../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * Membuat akun OWNER pertama jika belum ada
 */
async function createDefaultOwner() {
  const owner = await prisma.user.findFirst({
    where: {
      role: "OWNER",
    },
  });

  if (owner) return;

  const hashedPassword = await bcrypt.hash("zyouzzgc", 10);

  await prisma.user.create({
    data: {
      username: "owner",
      password: hashedPassword,
      role: "OWNER",
      balance: 0,
    },
  });

  console.log("✅ Default OWNER berhasil dibuat");
}

module.exports = {
  createDefaultOwner,
};
