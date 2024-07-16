import { Suspense } from "react";

import Products from "@/modules/products";
import Skeleton from "@/components/Skeleton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10">
      <h1 className="text-3xl text-orange-600">Online Shop</h1>
      <Suspense fallback={<Skeleton />}>
        <Products />
      </Suspense>
    </main>
  );
}
