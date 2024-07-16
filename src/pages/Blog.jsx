import React from "react";
import { Helmet } from "react-helmet-async";
import Wrapper from "../common/wrapper/Wrapper";

function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="" />
      </Helmet>
      <Wrapper>
        <h1>blog</h1>
      </Wrapper>
    </>
  );
}

export default Blog;
