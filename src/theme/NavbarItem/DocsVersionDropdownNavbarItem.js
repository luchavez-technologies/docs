import React from "react";
import { useActiveDocContext } from "@docusaurus/plugin-content-docs/client";
import DocsVersionDropdownNavbarItem from "@theme-original/NavbarItem/DocsVersionDropdownNavbarItem";

export default function DocsVersionDropdownNavbarItemWrapper(props) {
  // do not display this navbar item if current page is not a doc
  const { activeDoc } = useActiveDocContext(props.docsPluginId);
  if (!activeDoc) {
    return null;
  }

  return <DocsVersionDropdownNavbarItem {...props} />;
}
