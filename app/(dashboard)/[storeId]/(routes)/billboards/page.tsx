import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

import BillboardClient from "./components/client";

interface BillboardsPageProps {
  params: {
    storeId: string;
  };
}

const BillboardsPage: React.FC<BillboardsPageProps> = async ({ params }) => {
  // const { userId } = auth();

  // if (!userId) {
  //   redirect("/sign-in");
  // }

  // const store = await prismadb.store.findFirst({
  //   where: {
  //     id: params.storeId,
  //     userId,
  //   },
  // });

  // if (!store) {
  //   redirect("/");
  // }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient />
      </div>
    </div>
  );
};

export default BillboardsPage;
