import React, { Suspense } from "react";
import Layout from "../../common/dashboard/Layout";
import Proutes from "../../common/Proutes";
import TabComp from "../../common/TabComp";
import { useSelector } from "react-redux";
import EditForm from "../../components/Dashboard/ProfileComponent/EditForm";
import ChangePass from "../../components/Dashboard/ProfileComponent/ChangePass";
import Loader from "../../common/Loader";
import ProfileComponent from "../../components/Dashboard/ProfileComponent/ProfileComponent";

function Profile() {
  const GetUserData = useSelector((state) => state.auth.values);
  console.log(GetUserData, "useget");

  const tabsheadr = [
    { title: "Profile" },
    { title: "Edit Profile" },
    { title: "Change password" },
  ];
  const Tabsbody = [
    {
      content: (
        <>
          <ProfileComponent GetUserData={GetUserData} />
        </>
      ),
    },
    {
      content: (
        <>
          <EditForm />
        </>
      ),
    },
    {
      content: (
        <>
          <ChangePass />
        </>
      ),
    },
  ];

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Proutes>
          <Layout>
            <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
          </Layout>
        </Proutes>
      </Suspense>
    </>
  );
}

export default Profile;
