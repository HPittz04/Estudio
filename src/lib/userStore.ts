import { randomUUID } from "crypto";
import bcrypt from "bcryptjs";
import { readJsonFile, writeJsonFile } from "./fileStore";

const USERS_FILE = "users.json";

type UserRecord = {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
};

async function getAllUsers() {
  return readJsonFile<UserRecord[]>(USERS_FILE, []);
}

async function persistUsers(users: UserRecord[]) {
  await writeJsonFile<UserRecord[]>(USERS_FILE, users);
}

export async function findUserByEmail(email: string) {
  const users = await getAllUsers();
  return users.find((user) => user.email.toLowerCase() === email.toLowerCase()) ?? null;
}

export async function createUser({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}) {
  const existing = await findUserByEmail(email);
  if (existing) {
    throw new Error("Este email já está registado.");
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user: UserRecord = {
    id: randomUUID(),
    email: email.toLowerCase(),
    name,
    passwordHash,
  };

  const users = await getAllUsers();
  users.push(user);
  await persistUsers(users);

  return user;
}

export async function verifyUserCredentials(email: string, password: string) {
  const user = await findUserByEmail(email);
  if (!user) {
    return null;
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    return null;
  }

  return user;
}
