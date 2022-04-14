import { useRef } from "react";
import moon from "./moon.png";
import land from "./land.png";
import cat from "./cat.gif";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          onClick={() => {
            alert("redirect to cat page");
            window.open("https://github.com/shashank99928", "_blank");
          }}
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2 className="subtitle">Welcome scroll 👇</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => {
            ref.current.scrollTo(0);
            window.open("https://github.com/shashank99928", "_blank");
          }}
        >
          <h2>Click here to view my portfolio 🐱</h2>
          <h1>PS Click on Cat emoji</h1>
        </ParallaxLayer>
      </Parallax>
      <footer>credit @Jeff Danely</footer>
    </div>
  );
}

export default App;
