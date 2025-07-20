import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  Coin,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mx-5 mb-5">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-6 p-5 ml-5">
          <img src={imageURL} style={{ width: "100%" }} alt="Product" />
        </div>
        <div className="col-4 p-5 mt-5">
          <h3 className="fs-2">{productName}</h3>
          <p style={{ lineHeight: "1.9" }}>{productDescription}</p>
          <div className="mt-4">
            {Coin && <a href={Coin}> Coin ➜</a>}
            {tryDemo && <a href={tryDemo}>tryDemo ➜</a>}
            {learnMore && <a href={learnMore} style={{ marginLeft: "70px" }}>learnMore ➜</a>}
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                style={{ width: "35%" }}
              />
            </a>
            <a href={appStore} style={{ marginLeft: "32px" }}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ width: "35%" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
