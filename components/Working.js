import React from "react";
import "./working.css";
function Working() {
  return (
    <div className="living">
      <h3 className="lr-h">How It Works</h3>
      <p className="lr-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="work-pack">
        <div className="box1">
          <div>
            <img
              src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686038396/african-american-man-paying-with-credit-card-online-while-making-orders-via-mobile-internet-making-transaction-using-mobile-bank-application_1_az4gxi.png"
              alt="box"
              className="work-img"
            />
            <div className="outer-cir">
              <div className="inner-cir">1.</div>
            </div>
            <div className="data-text">
              <h3 className="box-h">Purchase Securely</h3>
              <p className="box-p">
                Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="box2">
          <div>
            <img
              src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686038598/image_87_fhk93i.png"
              alt="box"
              className="work-img"
            />
            <div className="outer-cir">
              <div className="inner-cir">2.</div>
            </div>
            <div className="data-text">
              <h3 className="box-h">Ships From Warehouse</h3>
              <p className="box-p">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="box3">
          <div>
            <img
              src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1686038604/empty-living-room-with-blue-sofa-plants-table-empty-white-wall-background-3d-rendering_1_qahudw.png"
              alt="box"
              className="work-img"
            />
            <div className="outer-cir">
              <div className="inner-cir">3.</div>
            </div>
            <div className="data-text">
              <h3 className="box-h">Style Your Room</h3>
              <p className="box-p">
                Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.
              </p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Working;
