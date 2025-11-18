import { readJsonFile, writeJsonFile } from "./fileStore";

const MEMBERSHIP_FILE = "memberships.json";

type MembershipRecord = {
  userId: string;
  status: "active" | "inactive";
  checkoutSessionId?: string;
  updatedAt: string;
};

async function getAllMemberships() {
  return readJsonFile<MembershipRecord[]>(MEMBERSHIP_FILE, []);
}

async function persistMemberships(memberships: MembershipRecord[]) {
  await writeJsonFile(MEMBERSHIP_FILE, memberships);
}

export async function getMembershipForUser(userId: string) {
  const memberships = await getAllMemberships();
  return memberships.find((record) => record.userId === userId) ?? null;
}

export async function markMembershipActive(userId: string, checkoutSessionId?: string) {
  const memberships = await getAllMemberships();
  const existing = memberships.find((record) => record.userId === userId);
  const updated: MembershipRecord = {
    userId,
    status: "active",
    checkoutSessionId,
    updatedAt: new Date().toISOString(),
  };

  if (existing) {
    Object.assign(existing, updated);
  } else {
    memberships.push(updated);
  }

  await persistMemberships(memberships);
  return updated;
}
