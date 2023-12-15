import React from "react";
import assets from "../../assets"; // Assuming your asset file is named index.js and located in the "../../assets" directory
import "./brand.css";

const Brand = () => (
    <div className="gpt3__brand section__padding">
        <div>
            <img src={assets.google} alt="Google" />
        </div>
        <div>
            <img src={assets.slack} alt="Slack" />
        </div>
        <div>
            <img src={assets.dropbox} alt="Dropbox" />
        </div>
        <div>
            <img src={assets.shopify} alt="Shopify" />
        </div>
    </div>
);

export default Brand;
