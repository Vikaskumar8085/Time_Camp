import React from "react";
import Button from "../../../../common/Button";
import ClientDrawer from "../../../../components/AdminComponent/Clientcomponent/ClientDrawer";
import {
  createClientapicall,
  fetchclientapicall,
} from "../../../../apiservice/admin/clientapiservice";
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import {setLoader} from "../../../../redux/slices/loaderSlice";
import ClientTable from "../../../../components/AdminComponent/Clientcomponent/clientpagecomponent/ClientTable";
import {setClients} from "../../../../redux/slices/AdminSlice/adminSlice";
function ClientPage() {
  const [IsOpen, setOpen] = React.useState(false);
  const fetchclients = useSelector((state) => state.admin.clientValue);

  const dispatch = useDispatch();

  //   add client
  const ClienthandleSubmit = async (value) => {
    try {
      dispatch(setLoader(true));
      const response = await createClientapicall(value);
      if (response?.success) {
        dispatch(setLoader(false));
        toast.success(response?.message);
        setOpen(false);
        fetchallclients();
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.message);
    }
  };

  // get client

  const fetchallclients = async () => {
    try {
      dispatch(setLoader(true));
      const response = await fetchclientapicall();
      if (response?.success) {
        dispatch(setLoader(false));
        dispatch(setClients(response.clientdata));
      }
    } catch (error) {
      dispatch(setLoader(false));
      toast.error(error?.response?.message);
    }
  };

  const handleOpen = (value) => {
    setOpen(true);
    console.log(value, "Lvlauelsf");
  };

  React.useEffect(() => {
    fetchallclients();
  }, [0]);

  return (
    <>
      <section className="client_wrapper">
        <Button onclick={() => setOpen(true)}>add client</Button>
        {IsOpen && (
          <ClientDrawer
            IsOpen={IsOpen}
            // CItems={CItems}
            setOpen={setOpen}
            ClienthandleSubmit={ClienthandleSubmit}
            // ClientEditHandle={ClientEditHandle}
          />
        )}
      </section>
      <ClientTable fetchclients={fetchclients} handleOpen={handleOpen} />
    </>
  );
}

export default ClientPage;
