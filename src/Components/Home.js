import React from "react";
import backgroundImage from "../Images/background.jpg";

const styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100vh",
};
const textStyle = {
  fontSize: "1.5rem",
  margin: "auto",
  textAlign: "center",
  color: "white",
  paddingTop: "10vh",
};

function Home() {
  return (
    <div style={styles}>
      <div style={textStyle}>
        {/* <div className="welcome">
          <p3>Oka Mimarlık.</p3>
        </div>
        <div className="whoWeAre">
          <p>
            Mimarlık, iç mekan tasarımı, restorasyon, inşaat alanlarında en iyi
            tasarımlar ve en kaliteli ürünlerler ile hizmetinizdeyiz.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
