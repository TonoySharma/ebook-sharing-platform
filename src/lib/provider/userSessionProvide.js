'use client';

import { authClient } from "../auth-client";



export default function UserSessionProvider({ children }) {
  const { data: session } = authClient.useSession();

  const user = session?.user || null;

  return children(user);
}