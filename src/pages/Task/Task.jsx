import React from "react";
import {Suspense} from "react";
import Layout from "../../common/dashboard/Layout";
import Loader from "../../common/Loader";
import Proutes from "../../common/Proutes";
import TabComp from "../../common/TabComp";
import TaskPages from "./Subpages/TaskPages";

function Task() {
  const tabsheader = [{title: "ALl Tasks"}, {title: "Task List"}];

  const tbody = [
    {
      content: (
        <>
          <TaskPages />
        </>
      ),
    },
    {content: <> all tasks</>},
  ];
  return (
    <Suspense fallback={<Loader />}>
      <Proutes>
        <Layout>
          <TabComp Tabsheader={tabsheader} TabsBody={tbody} />
        </Layout>
      </Proutes>
    </Suspense>
  );
}

export default Task;
