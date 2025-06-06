import React, { useEffect } from "react";
import DefaultSheet from "./sheets/DefaultSheet";
import { SheetOptionsType } from "./sheets/interface";
import FieldsSheet from "./sheets/FieldsSheet";
import { SheetContent } from "@lens/base/components/ui/sheet";

export interface LensSidebarInterface {
  tableContainerRef?: React.RefObject<HTMLDivElement>;
  triggerLabel?: string;
  triggerIcon?: React.ReactNode;
  sidebarTitle?: string;
  children?: React.ReactNode;
  table?: any;
  show?: boolean;
  handleDragEnd?: any;
}

const LensSidebar = ({
  tableContainerRef,
  table,
  show,
  handleDragEnd,
}: LensSidebarInterface) => {
  const [currentSheet, setCurrentSheet] =
    React.useState<SheetOptionsType>("default");

  useEffect(() => {
    if (!show) {
      setCurrentSheet("default");
    }
  }, [show]);

  return (
    <SheetContent
      containerRef={tableContainerRef}
      className="h-full w-full overflow-y-auto lens-wrapper"
    >
      {currentSheet === "default" && (
        <DefaultSheet setCurrentSheet={setCurrentSheet} />
      )}
      {currentSheet === "field_options" && (
        <FieldsSheet
          setCurrentSheet={setCurrentSheet}
          tableContainerRef={tableContainerRef}
          table={table}
          handleDragEnd={handleDragEnd}
        />
      )}

      {/* <LayoutSheet
            setCurrentSheet={setCurrentSheet}
            tableContainerRef={tableContainerRef}
            table={table}
          /> */}
    </SheetContent>
  );
};

export default LensSidebar;
