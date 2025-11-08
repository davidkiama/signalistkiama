// use client
"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import Navitems from "./Navitems";

export const UserDropdown = () => {
  const router = useRouter();

  const handleSignOut = () => {
    // Perform sign out logic
    router.push("/login");
  };

  const user = { name: "John Doe", email: "john.doe@example.com" };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="flex items-center gap-3 text-gray-400 hover:text-yellow">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>

          <div className="hidden md:block flex-col items-start">
            <span className="text-base font-medium text-gray-400">{user.name}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div className="flex relative items-center gap-3 py-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">{user.name}</span>

              <span className="text-sm  text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4 hidden sm:block" />
          Sign Out
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-gray-600 hidden sm:block" />

        <nav className="sm:hidden">
          <Navitems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
