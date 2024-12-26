"use client";
import { siteConfig } from "@/config/site-config";
import GridItem from "./grid-item";
import Equipments from "./grid-items/equipments";
import Mentor from "./grid-items/mentor";
import Project from "./grid-items/project";
import Social from "./grid-items/social";

const RightPanel = () => {
  return (
    <div className="grid w-full grid-cols-4 xl:gap-4 gap-3 xl:py-6 py-4 xl:px-1 xl:overflow-y-auto auto-rows-[76px]">
    {siteConfig.items.map((item, index) => (
      <GridItem
        key={item.title + item.type + index}
        size={item.layout}
        backgroundColor={item.backgroundColor}
        index={index}
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
  );
};

export default RightPanel;