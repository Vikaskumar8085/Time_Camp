import { Button, Drawer } from "@mui/material";
import React, { useState } from "react";

function Company() {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        Add Company
      </Button>

      <Drawer open={IsOpen} anchor="right">
        <form>
          <input
            type="text"
            name=""
            placeholder="Please enter your Name"
            id=""
          />
          <button>submit</button>
        </form>
      </Drawer>
    </div>
  );
}

export default Company;
