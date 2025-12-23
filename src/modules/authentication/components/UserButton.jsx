"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function UserButton({ user, showEmail = true, showMemberSince = true }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await onSignOut();
    } catch (error) {
      console.error("Error during sign out:", error);
    } finally {
      setLoading(false);
    }
  };

  //getting user initials for avatar
  const getUserInitials = (name, email) => {
    if (name) {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
    if (email) {
      return email.slice(0, 2).toUpperCase();
    }
    return "U";
  };

  //getting member since
  // const formatMemberSince = (date) => {
  //   return new Intl.DateTimeFormat("en-US", {
  //     month: "long",
  //     year: "numeric",
  //   }).format(new Date(date));
  // };

  // if no user, do not render the component
  if (!user) {
    return null;
  }

  return (
    <DropdownMenu>
      {/* Trigger Button with Avatar */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={"hover:bg-accent cursor-pointer rounded-full"}
        >
          <Avatar>
            <AvatarImage src={user.image || ""} alt={user.name || "User "} />
            <AvatarFallback className={"bg-secondary font-medium"}>
              {getUserInitials(user.name, user.email)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown Menu Content */}
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>
          <Avatar>
            <AvatarImage src={user.image || ""} alt={user.name || "User "} />
            <AvatarFallback className={"bg-secondary font-medium"}>
              {getUserInitials(user.name, user.email)}
            </AvatarFallback>
          </Avatar>
          {/* <div>
            {showMemberSince && (
              <p className="text-muted-foreground text-xs">
                Member since {formatMemberSince(user.createdAt)}
              </p>
            )}
          </div> */}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className={"cursor-pointer"}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
