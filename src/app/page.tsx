import { buttonVariants } from "@/components/ui/button";
import { type Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { Plus } from "lucide-react";
import Link from "next/link";

const sampleData: Payment[] = [
  {
    id: "1",
    name: "Netflix",
    amount: 7.99,
    status: "pending",
  },
  {
    id: "2",
    name: "Amazon Prime",
    amount: 10.0,
    status: "pending",
  },
  {
    id: "3",
    name: "Apple Music",
    amount: 5.99,
    status: "pending",
  },
  {
    id: "4",
    name: "Comcast",
    amount: 35.95,
    status: "pending",
  },
];
export default async function Home() {
  return (
    <main className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-medium text-zinc-800">
          Your subscriptions
        </h1>
        <div className="flex gap-2">
          <Link
            href="/accounts"
            className={buttonVariants({ variant: "outline" })}
          >
            Manage accounts
          </Link>
          <Link href="/add-account" className={buttonVariants()}>
            <Plus className="h-5 w-5" /> Add accounts
          </Link>
        </div>
      </div>
      <DataTable className="bg-white" columns={columns} data={sampleData} />
    </main>
  );
}
