import { cn } from "@/lib/utils";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export interface Account {
  id: string;
  name: string;
  bank_name: string;
  type: string;
  sub_type: string;
  mask?: number;
}

interface Props {
  account: Account;
  className?: string;
}

const AccountCard = ({ account, className }: Props) => {
  const { bank_name, name, sub_type, type, mask } = account;
  return (
    <div
      className={cn(
        className,
        "flex h-[250px] flex-col justify-between rounded-xl border bg-white p-6 shadow-xl shadow-black/5",
      )}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-3xl font-medium">{bank_name}</h2>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="rounded-full border p-2">
              <DotsHorizontalIcon />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <p className="font-mono text-xl text-black/30">{type}</p>
          <p className="font-mono text-xl text-black/30">{sub_type}</p>
          <p className="font-mono text-xl font-medium">{name}</p>
        </div>
        <p className="font-mono text-xl font-medium">{mask}</p>
      </div>
    </div>
  );
};

export default AccountCard;
