import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
  return (
    <NavigationMenu>
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
      </NavigationMenuList>
    </NavigationMenu>
  );
}
