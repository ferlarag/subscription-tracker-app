import AccountCard, { type Account } from "@/components/account-card";
import React from "react";

const sampleAccounts: Account[] = [
  {
    id: "1",
    name: "Account 1",
    bank_name: "Bank A",
    type: "Checking",
    sub_type: "Personal",
    mask: 1234,
  },
  {
    id: "3",
    name: "Account 3",
    bank_name: "Bank C",
    type: "Checking",
    sub_type: "Personal",
    mask: 1230,
  },
  {
    id: "4",
    name: "Account 4",
    bank_name: "Bank D",
    type: "Savings",
    sub_type: "Personal",
    mask: 5678,
  },
  {
    id: "2",
    name: "Account 2",
    bank_name: "Bank B",
    type: "Savings",
    sub_type: "Business",
  },
  {
    id: "5",
    name: "Account 5",
    bank_name: "Bank E",
    type: "Checking",
    sub_type: "Business",
  },
  {
    id: "6",
    name: "Account 6",
    bank_name: "Bank F",
    type: "Savings",
    sub_type: "Personal",
    mask: 9012,
  },
  {
    id: "7",
    name: "Account 7",
    bank_name: "Bank G",
    type: "Checking",
    sub_type: "Business",
    mask: 4677,
  },
  {
    id: "8",
    name: "Account 8",
    bank_name: "Bank H",
    type: "Savings",
    sub_type: "Personal",
  },
  {
    id: "9",
    name: "Account 9",
    bank_name: "Bank I",
    type: "Checking",
    sub_type: "Business",
    mask: 2356,
  },
];

const Page = () => {
  return (
    <main className=" space-y-4">
      <h1 className="text-4xl font-medium">Your bank accounts</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {sampleAccounts.map((account) => (
          <AccountCard account={account} key={account.id} />
        ))}
      </div>
    </main>
  );
};

export default Page;
