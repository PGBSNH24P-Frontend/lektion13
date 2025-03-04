/*
HTML page
  Nav header
    Icon
    Links
    Dropdowns
    Search field
  Nav header 2
  Sidebar left
    Links
  Main content
    Headings
    Paragraphs
  Sidebar right
  Footer
*/

import { Footer } from "../components/Footer";
import { MainContent } from "../components/MainContent";
import { PrimaryNav } from "../components/PrimaryNav";
import { SecondaryNav } from "../components/SecondaryNav";
import { SidebarLeft } from "../components/SidebarLeft";
import { SidebarRight } from "../components/SidebarRight";

export function HTMLPage() {
  return <>
    <PrimaryNav />
    <SecondaryNav />
    <SidebarLeft />
    <MainContent />
    <SidebarRight />
    <Footer />
  </>
}