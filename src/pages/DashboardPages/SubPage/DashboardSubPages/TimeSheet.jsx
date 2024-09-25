// import React, { Suspense, useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addTimesheetApiCall,
//   edittimesheetapicall,
//   GetallTimesheetapicall,
//   removetimesheetapicall,
// } from "../../../../apiservice/admin";
// import Loader from "../../../../common/Loader";
// import TabComp from "../../../../common/TabComp";

// import { setLoader } from "../../../../redux/slices/loaderSlice";
// import {
//   setSingleTimesheet,
//   setTimesheetValue,
// } from "../../../../redux/slices/Timesheet/TimesheetSlice";
// import ProjectTime from "../TImeSheet/ProjectTime";
// import TImeSheets from "../TImeSheet/TImeSheets";
// import TImeSummary from "../TImeSheet/TImeSummary";

// function TimeSheet() {
//   const TSItems = useSelector((state) => state.timesheet.singleValue);

//   const [IsOpen, setIsOpen] = useState(false);
//   const dispatch = useDispatch();

//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   // // get all timesheets
//   // const getalltimesheetservice = async () => {
//   //   try {
//   //     dispatch(setLoader(true));
//   //     const response = await GetallTimesheetapicall();
//   //     if (response?.data?.success) {
//   //       dispatch(setLoader(false));
//   //       dispatch(setTimesheetValue(response?.data?.message));
//   //     }
//   //   } catch (error) {
//   //     dispatch(setLoader(false));
//   //     console.log(error?.response?.data);
//   //   }
//   // };

//   // // add timesheets
//   // const AddTimesheets = async (value) => {
//   //   try {
//   //     dispatch(setLoader(true));
//   //     const response = await addTimesheetApiCall(value);
//   //     console.log(response, "response");
//   //     if (response.status === 200) {
//   //       dispatch(setLoader(false));
//   //       setIsOpen(false);
//   //       getalltimesheetservice();
//   //       toast.success("TimeSheet data added successfully");
//   //     }
//   //   } catch (error) {
//   //     dispatch(setLoader(false));
//   //     console.log(error?.response?.data);
//   //   }
//   // };

//   // // Remove TimeSheet

//   // const handleRemove = async (value) => {
//   //   try {
//   //     dispatch(setLoader(true));
//   //     const response = await removetimesheetapicall(value);
//   //     if (response.status === 200) {
//   //       toast?.success(response.data?.message);
//   //       dispatch(setLoader(false));
//   //       getalltimesheetservice();
//   //     }
//   //   } catch (error) {
//   //     dispatch(setLoader(false));
//   //     console.log(error?.response?.data);
//   //   }
//   // };

//   // //   Update time sheets

//   // const updatetimesheetservice = async (value) => {
//   //   try {
//   //     console.log(value, "edit value");
//   //     const Val = {
//   //       id: TSItems._id,
//   //       payload: value,
//   //     };
//   //     dispatch(setLoader(true));
//   //     const response = await edittimesheetapicall(Val);
//   //     if (response.status === 200) {
//   //       dispatch(setLoader(false));
//   //       setIsOpen(false);
//   //       getalltimesheetservice();
//   //       toast.success("updated timeSheet successfully");
//   //     }
//   //   } catch (error) {
//   //     dispatch(setLoader(false));
//   //     setIsOpen(false);
//   //     toast.error(error?.response?.data);
//   //   }
//   // };
//   // useEffect(() => {
//   //   getalltimesheetservice();
//   // }, [dispatch]);
//   const tabsheadr = [
//     { title: "TimeSheets" },
//     { title: "Project Time" },
//     { title: "Time Summary" },
//   ];
//   const Tabsbody = [
//     {
//       content: (
//         <>
//           {/* <TImeSheets
//             updatetimesheetservice={updatetimesheetservice}
//             handleRemove={handleRemove}
//             AddTimesheets={AddTimesheets}
//             handleOpen={handleOpen}
//             IsOpen={IsOpen}
//             setIsOpen={setIsOpen}
//             dispatch={dispatch}
//             setSingleTimesheet={setSingleTimesheet}
//             TSItems={TSItems}
//           /> */}
//         </>
//       ),
//     },
//     {
//       content: (
//         <>
//           <ProjectTime />
//         </>
//       ),
//     },
//     {
//       content: (
//         <>
//           <TImeSummary />
//         </>
//       ),
//     },
//   ];
//   return (
//     <>
//       <Suspense fallback={<Loader />}>
//         <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
//       </Suspense>
//     </>
//   );
// }

// export default TimeSheet;
import React from "react";

function TimeSheet() {
  return <div></div>;
}

export default TimeSheet;
