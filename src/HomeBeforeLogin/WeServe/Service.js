import React from "react";
import "./Service.css";
import service from "../../assets/service.png";

const Service = () => {
  return (
    <>
      <section className="service mt-5">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-md-6 ">
              <h1 style={{ textAlign: "center" }}>
                {" "}
                نحن أكثر من مجرد خدمة متعددة{" "}
              </h1>
              <h5 className="text">
                نصنع كل شيء يدويًا بأفضل المكونات الممكنة
              </h5>
              <div className="row p-3">
                <div className="col-6">
                  <ul>
                    <li>
                      <p>مشويات</p> <i class="fa-solid fa-drumstick-bite "></i>{" "}
                    </li>
                    <li>
                      <p>محاشي</p>
                      <i class="fa-solid fa-bowl-food"></i>{" "}
                    </li>
                    <li>
                      <p>حلويات</p>
                      <i class="fa-solid fa-cake-candles"></i>{" "}
                    </li>
                    <li>
                      <p>عصائر</p>
                      <i class="fa-solid fa-champagne-glasses"></i>{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      <p>مشويات</p> <i class="fa-solid fa-drumstick-bite"></i>{" "}
                    </li>
                    <li>
                      <p>محاشي</p>
                      <i class="fa-solid fa-bowl-food"></i>{" "}
                    </li>
                    <li>
                      <p>حلويات</p>
                      <i class="fa-solid fa-cake-candles"></i>{" "}
                    </li>
                    <li>
                      <p>عصائر</p>
                      <i class="fa-solid fa-champagne-glasses"></i>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={service} alt="service" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Service;
