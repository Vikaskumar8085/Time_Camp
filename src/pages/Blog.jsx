import { Container } from "@mui/system";
import moment from "moment/moment";
import React from "react";
import {Helmet} from "react-helmet-async";
import Wrapper from "../common/wrapper/Wrapper";
import "./blog.style.css";
function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="" />
      </Helmet>
      <Wrapper>
        <Container>

        <section className="blog_header">
          <div className="blog_header_title">
            <h1>Blog</h1>
          </div>
          <div className="blog_header_contetn">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              asperiores corrupti nesciunt quaerat quo ipsa unde quidem laborum,
              quis earum omnis assumenda, totam neque ut quam aperiam tempora
              corporis soluta.
            </p>
          </div>
        </section>
        <section className="my_blog_wrapper">
          <div className="my_blog_title">
            <h1>
              My <span>Blog</span>
            </h1>
          </div>

          <div className="my_blog_box">
            {/* card 1 */}
            <div className="my_blog_card">
              <div className="my_blog_card_image">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/94353f68382503.5b5abd502f0ad.jpg"
                  alt=""
                  srcset=""
                  />
              </div>
              <div className="my_blog_card_content">
                <p>{moment().fromNow()}</p>

                <h1>Beautifyl working</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  eos consequuntur neque consectetur deserunt, odio excepturi
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="my_blog_card">
              <div className="my_blog_card_image">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/94353f68382503.5b5abd502f0ad.jpg"
                  alt=""
                  srcset=""
                  />
              </div>
              <div className="my_blog_card_content">
                <p>{moment().fromNow()}</p>
                <h1>Top Branding Surprise </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  eos consequuntur neque consectetur deserunt, odio excepturi
                </p>
              </div>
            </div>
          </div>
        </section>
                  </Container>
      </Wrapper>
    </>
  );
}

export default Blog;
