import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="row" id="about">
            <div className="col-4">
              {" "}
              <div class="header-text">
                <h1>
                  Get the access of your account now in the comfort of your home
                </h1>

                <p>
                  No more waiting in the long queues ,transfer the money very
                  conveniently with the help of our Sparks Bank System , a
                  digital wallet platform and online payment system developed to
                  power in-app, online, and in-person contactless transactions
                  with mobile phones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
