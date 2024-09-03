"use client";

import { useBalance } from "@repo/store/balance";

export default function () {
  const balance = useBalance();
  return (
    <div>
      hi there {balance}
      <h1>hi from second branch</h1>
    </div>
  );
}
