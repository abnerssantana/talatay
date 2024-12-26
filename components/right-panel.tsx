"use client";

import { siteConfig } from "@/config/site-config";
import GridItem from "./grid-item";
import Equipments from "./grid-items/equipments";
import Mentor from "./grid-items/mentor";
import Project from "./grid-items/project";
import Social from "./grid-items/social";
import JewelryCatalog from "./jewelry-catalog";

const RightPanel = () => {
  return (
    <div className="flex flex-col w-full gap-2 xl:py-4 py-4 xl:px-1 xl:overflow-y-auto">
      {/* Jewelry Catalog Section */}
      <div>
         <JewelryCatalog />
      </div>

      {/* Grid Items */}
      <div className="grid w-full grid-cols-4 xl:gap-4 gap-3 auto-rows-[76px]">
        {siteConfig.items.map((item, index) => (
          <GridItem
            key={item.title + item.type + index}
            size={item.layout}
            backgroundColor={item.backgroundColor}
          >
            {item.type === "social" ? (
              <Social item={item} />
            ) : item.type === "mentor" ? (
              <Mentor item={item} />
            ) : item.type === "project" ? (
              <Project item={item} />
            ) : item.type === "equipment" ? (
              <Equipments item={item} />
            ) : (
              <div>Need to create new component type.</div>
            )}
          </GridItem>
        ))}
      </div>
    </div>
  );
};

export default RightPanel;