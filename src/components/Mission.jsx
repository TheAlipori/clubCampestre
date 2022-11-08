import React from "react";
import { UserGroupIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const mission = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[700px] bg-primary/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src="./src/assets/mision.jpg"
          alt="/"
        />
      </div>
      <div>
        <div>
          <h2>Nuestros valores</h2>
          <h3>Lo que somos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            odio sint harum odit similique perspiciatis quaerat alias laborum
            atque sit esse provident perferendis dignissimos debitis
            exercitationem, fuga consectetur dolorum officia!
          </p>
        </div>
        <div>
          <div>
            <div>
              <UserGroupIcon />
              <h3>Mas que una comunidad</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                nam quo dicta provident! Qui delectus dolorem voluptatum
                laudantium reprehenderit libero explicabo nulla eaque dolorum
                excepturi, minus recusandae perferendis non minima.
              </p>
            </div>
            <div>
              <p>
                Ver mas <ChevronRightIcon />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mission;
