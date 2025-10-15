import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem asChild className={navigationMenuTriggerStyle()}>
          <Link to="/">Home</Link>
        </NavigationMenuItem>
        <NavigationMenuItem asChild className={navigationMenuTriggerStyle()}>
          <Link to="/drivers">Drivers</Link>
        </NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link to="/teams">Teams</Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link to="/circuits">Circuits</Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link to="/calendar">Calendar</Link>
        </NavigationMenuLink>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Standings</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4 ">
              <li>
                <NavigationMenuLink>
                  <Link to="/driverStandings">
                    <div className="font-medium">Driver Standings</div>
                    <div className="text-muted-foreground">
                      Know how the drivers championship goes!
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <Link to="/teamStandings">
                    <div className="font-medium">Team Standings</div>
                    <div className="text-muted-foreground">
                      Know how the constructors championship goes!
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
