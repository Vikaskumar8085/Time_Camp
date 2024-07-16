import React from "react";
import { Helmet } from "react-helmet-async";
import Card from "../common/Cards/Card";
import Image from "../common/Image/Image";
import Input from "../common/Input/Input";

function Home() {
  return (
    <>
      <Helmet>
        <title> World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Card>
        <article>
          <h1>hello</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            voluptates soluta illum architecto excepturi placeat maiores nisi?
            Ut dolore, necessitatibus totam velit temporibus doloremque
            asperiores voluptatum voluptas, eveniet dignissimos tenetur.
          </p>
        </article>
        {/* <picture>
          <source
            media="(min-width:650px)"
            srcset=""
          />
          <source
            media="(min-width:465px)"
            srcset="https://www.w3schools.com/tags/img_pink_flowers.jpg"
          />
          <img
            src="https://www.w3schools.com/tags/img_pink_flowers.jpg"
            alt="Flowers"
          />
        </picture> */}
        <Image data={"https://www.w3schools.com/tags/img_pink_flowers.jpg"} />
      </Card>
      <Input labelText={"Name"} placeholder="hello" />
    </>
  );
}

export default Home;
