import React from "react";

import logo from "../../../assets/images/E5Logo-blue-small.svg";
import { IconButton } from "../../atoms";
import { MenuItem, MenuItemSmall, Github } from "../../molecules";
import SideBarMenuFilter from "./SideBarMenuFilter";

export function SidebarMenu({ pagename }) {
  // SideBar select the buttons to show in sidebar -options: "adminDash", "organizerDash", "eventPages"
  const buttons = SideBarMenuFilter(pagename);
  return (
    <aside className="dashboard-menu">
      <img src={logo} alt="Event5's Logo" />
      <div>
        {buttons.map((item) => {
          if (item.component === "Item") {
            return (
              <MenuItem
                className=""
                key={item.key}
                icon={item.icon}
                text={item.text}
                link={item.link}
              />
            );
          } else {
            return (
              <MenuItemSmall
                className=""
                key={item.key}
                icon={item.icon}
                text={item.text}
                link={item.link}
              />
            );
          }
        })}
      </div>
      <IconButton text="sd" type="primary" color="first" />
      <Github />
    </aside>
  );
}
