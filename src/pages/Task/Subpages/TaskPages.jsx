import React from "react";
import Button from "../../../common/Button";
import TaskDrawer from "../../../components/AdminComponent/TaskComp/TaskDrawer";
import TaskMilestoneDrawer from "../../../components/AdminComponent/TaskComp/TaskMilestoneDrawer";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
function TaskPages() {
  const [IsOpen, setOpen] = React.useState(false);
  const [MisOpen, setisOpen] = React.useState(false);

  return (
    <div>
      <div className="task_btn_wrapper" style={{display: "flex"}}>
        <Button onclick={() => setOpen(true)}>Add Task</Button>
        <Button onclick={() => setisOpen(true)}>Create Mile Stone</Button>
      </div>
      {IsOpen && <TaskDrawer IsOpen={IsOpen} setOpen={setOpen} />}
      {/* Create Mile Stone */}
      {MisOpen && (
        <TaskMilestoneDrawer MisOpen={MisOpen} setisOpen={setisOpen} />
      )}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Subtask ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Milestone</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Estimated Time</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Attachments</TableCell>
            </TableRow>
          </TableHead>
          {/*    <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.Subtask_id}>
                <TableCell>{task.Subtask_id}</TableCell>
                <TableCell>{task.Name}</TableCell>
                <TableCell>{task.Project}</TableCell>
                <TableCell>{task.Milestone}</TableCell>
                <TableCell>{task.Priority}</TableCell>
                <TableCell>{task.Status}</TableCell>
                <TableCell>
                  {new Date(task.Start).toLocaleDateString()}
                </TableCell>
                <TableCell>{new Date(task.End).toLocaleDateString()}</TableCell>
                <TableCell>{task.Estimated_time}</TableCell>
                <TableCell>
                  {task.Due_date
                    ? new Date(task.Due_date).toLocaleDateString()
                    : "N/A"}
                </TableCell>
                <TableCell>{task.Attachment}</TableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>
    </div>
  );
}

export default TaskPages;
