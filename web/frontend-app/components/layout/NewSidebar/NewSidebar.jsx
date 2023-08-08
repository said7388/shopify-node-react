import React, { useContext } from "react";
// import NavContent from '../../Prompt/NavContent'
import NavLinksContainer from "./NavLinksContainer";
import { SidebarContext } from "../../../contexts/SidebarContext";

const NewSidebar = () => {
  const { triggerNavContent, showMenu } = useContext(SidebarContext);
  return (
    <>
      <aside className={showMenu ? "sideMenuResponsive" : "sideMenu"}>
        <NavLinksContainer
          showMenu={showMenu}
          triggerUpdate={triggerNavContent}
        />
      </aside>
    </>
  );
};

export default NewSidebar;
