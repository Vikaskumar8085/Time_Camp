import React from "react";
import { Suspense } from "react";
import Layout from "../../common/dashboard/Layout";
import Loader from "../../common/Loader";
import Proutes from "../../common/Proutes";
import ProductivityLeaderBoardHead from "../../components/Dashboard/ProductivityleaderBoardComponent/ProductivityLeaderBoardHead";

function ProductivityLeaderBoardPage() {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Proutes>
          <Layout>
            <div className="Productivity_Leader_Board_Wrapper">
              <ProductivityLeaderBoardHead   />
            </div>
          </Layout>
        </Proutes>
      </Suspense>
    </>
  );
}

export default ProductivityLeaderBoardPage;
