import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

import MobileNavLink from "./MobileNavLink";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-64">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav className=" m-1 text-sm flex flex-col space-y-4">
          <ul>
            <Link className="w-full" to="/">
              <MobileNavLink onClick={handleLinkClick}>Home</MobileNavLink>
            </Link>
            <Link to="/drivers">
              <MobileNavLink onClick={handleLinkClick}>Drivers</MobileNavLink>
            </Link>
            <Link to="/teams">
              <MobileNavLink onClick={handleLinkClick}>Teams</MobileNavLink>
            </Link>
            <Link to="/circuits">
              <MobileNavLink onClick={handleLinkClick}>Circuits</MobileNavLink>
            </Link>
            <Link to="/calendar">
              <MobileNavLink onClick={handleLinkClick}>Calendar</MobileNavLink>
            </Link>
            <Link to="/driverStandings">
              <MobileNavLink onClick={handleLinkClick}>
                Driver Standings
              </MobileNavLink>
            </Link>
            <Link to="/teamStandings">
              <MobileNavLink onClick={handleLinkClick}>
                Team Standings
              </MobileNavLink>
            </Link>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
