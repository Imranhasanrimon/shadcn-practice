import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { Telescope, Focus, History, Crosshair, Mail } from "lucide-react";


const Navbar = () => {
    return (
        <Menubar className="sticky top-0 z-50 flex justify-center items-center">
            <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">Pages</MenubarTrigger>
                <MenubarContent>
                    <Link>
                        <MenubarItem>
                            Home <MenubarShortcut><IoMdHome /></MenubarShortcut>
                        </MenubarItem>
                    </Link>
                    <Link to="/dashboard">
                        <MenubarItem>
                            Dashoard <MenubarShortcut><MdSpaceDashboard /></MenubarShortcut>
                        </MenubarItem>
                    </Link>
                    <MenubarItem disabled>New Incognito Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Share</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Email link</MenubarItem>
                            <MenubarItem>Messages</MenubarItem>
                            <MenubarItem>Notes</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>
                        Print... <MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">Admission</MenubarTrigger>
                <MenubarContent>

                    <Link to="/BbaProgramAdmission">
                        <MenubarItem>BBA Program</MenubarItem>
                    </Link>
                    <Link>
                        <MenubarItem>MBA Program <span className="text-xs text-gray-600">(BBA Graduates)</span></MenubarItem>
                    </Link>
                    <Link>
                        <MenubarItem>MBA Program <span className="text-xs text-gray-600">(Evening)</span></MenubarItem>
                    </Link>
                    <Link>
                        <MenubarItem>MBA Program <span className="text-xs text-gray-600">(Executive)</span></MenubarItem>
                    </Link>
                    <Link>
                        <MenubarItem>M.Phid</MenubarItem>
                    </Link>
                    <Link>
                        <MenubarItem>PhD</MenubarItem>
                    </Link>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">About Us</MenubarTrigger>
                <MenubarContent>

                    <Link to="/history">
                        <MenubarItem >
                            History <MenubarShortcut><History /></MenubarShortcut>
                        </MenubarItem>
                    </Link>
                    <Link>
                        <MenubarItem >
                            Vision <MenubarShortcut><Telescope /></MenubarShortcut>
                        </MenubarItem>
                    </Link>
                    <Link>
                        <MenubarItem >
                            Mission <MenubarShortcut><Focus /></MenubarShortcut>
                        </MenubarItem>
                    </Link>
                    <Link>
                        <MenubarItem >
                            Goal <MenubarShortcut><Crosshair /></MenubarShortcut>
                        </MenubarItem>
                    </Link>
                    <Link>
                        <MenubarItem >
                            Message of Directior <MenubarShortcut><Mail /></MenubarShortcut>
                        </MenubarItem>
                    </Link>


                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">Profiles</MenubarTrigger>
                <MenubarContent>
                    <MenubarRadioGroup value="benoit">
                        <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                        <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                        <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                    </MenubarRadioGroup>
                    <MenubarSeparator />
                    <MenubarItem inset>Edit...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Add Profile...</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
};

export default Navbar;