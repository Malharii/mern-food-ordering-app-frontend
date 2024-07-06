import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-400" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="font-bold flex items-center gap-2">
              <CircleUserRound className="text-orange-400" />
              Welcome {user?.email}!
            </span>
          ) : (
            <span>Welcome to MalharEats.com!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={async () => await loginWithRedirect({})}
              className="flex-1 font-bold bg-orange-400"
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
