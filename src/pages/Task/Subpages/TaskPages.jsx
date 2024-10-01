import React from "react";
import {useState} from "react";
import Button from "../../../common/Button";
import TaskDrawer from "../../../components/AdminComponent/TaskComp/TaskDrawer";
import TaskMilestoneDrawer from "../../../components/AdminComponent/TaskComp/TaskMilestoneDrawer";

function TaskPages() {
  const [IsOpen, setOpen] = React.useState(false);
  const [MisOpen, setisOpen] = React.useState(false);

  return (
    <div>
      <div className="task_btn_wrapper" style={{display:'flex', }} >
        <Button onclick={() => setOpen(true)}>Add Task</Button>
        <Button onclick={() => setisOpen(true)}>Create Mile Stone</Button>
      </div>
      {IsOpen && <TaskDrawer IsOpen={IsOpen} setOpen={setOpen} />}
      {/* Create Mile Stone */}
      {MisOpen && (
        <TaskMilestoneDrawer MisOpen={MisOpen} setisOpen={setisOpen} />
      )}
    </div>
  );
}

export default TaskPages;
