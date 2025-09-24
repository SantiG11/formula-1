import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
          <Link to="/drivers">Docs</Link>
        </NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
