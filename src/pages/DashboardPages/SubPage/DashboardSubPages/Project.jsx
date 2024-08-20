import React, { Suspense, useState } from "react";
import Button from "../../../../common/Button";
import Loader from "../../../../common/Loader";
import ProjectDrawer from "../../../../components/AdminComponent/ProjectComponent/ProjectDrawer";

function Project() {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <Suspense fallback={<Loader />}>
      <Button onclick={() => setIsOpen(true)}>Add Project</Button>
      {IsOpen && <ProjectDrawer IsOpen={IsOpen} setIsOpen={setIsOpen} />}
    </Suspense>
  );
}

export default Project;
