import React from "react";
import { Suspense } from "react";
import Layout from "../../../common/dashboard/Layout";
import Loader from "../../../common/Loader";
import Proutes from "../../../common/Proutes";
import TabComp from "../../../common/TabComp";

function PaymentActivitiy() {
  const tabsheadr = [{ title: "Payment" }];
  const Tabsbody = [
    {
      content: <>h1</>,
    },
  ];
  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          <Proutes>
            <Layout>
              <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
            </Layout>
          </Proutes>
        </Suspense>
      </div>
    </>
  );
}

export default PaymentActivitiy;
