import React from 'react';
import { setupProfile } from '@/lib/setup-profile';
import { prisma } from '@/lib/db';
import { redirect } from 'next/navigation';

export default async function SetupPage() {
  const profile = await setupProfile();

  const server = await prisma.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  return <div>Create a server</div>;
}
