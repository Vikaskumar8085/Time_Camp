import React, {Suspense, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import Loader from "../../../../common/Loader";
import TabComp from "../../../../common/TabComp";
import ProjectTime from "../TImeSheet/ProjectTime";
import TImeSheets from "../TImeSheet/TImeSheets";
import TImeSummary from "../TImeSheet/TImeSummary";

function TimeSheet() {
  const [IsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const tabsheadr = [
    {title: "TimeSheets"},
    {title: "Project Time"},
    {title: "Time Summary"},
  ];
  const Tabsbody = [
    {
      content: <><TImeSheets/></>,
    },
    {
      content: (
        <>
          <ProjectTime />
        </>
      ),
    },
    {
      content: (
        <>
          <TImeSummary />
        </>
      ),
    },
  ];
  return (
    <>
      <Suspense fallback={<Loader />}>
        <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
      </Suspense>
    </>
  );
}

export default TimeSheet;
