import React from "react";

const Nosotros = () => {
  return (
    <div className="w-full  bg-primary">
      <div className="max-w-[1240px] mx-auto pb-16">
        <div className="text-center text-secondary font-body">
          <h2 className="text-center text-5xl pt-16">
            El mejor club deportivo
          </h2>
          <p className="text-3xl pt-9 pb-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laborum,
            ea officiis quo quibusdam cum iste optio distinctio accusamus
            eligendi, deserunt quod dicta cumque in ducimus voluptate totam,
            maxime porro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2  text-center">
          {/*card 1 */}
          <div class="flex justify-center">
            <div class=" shadow-lg bg-secondary max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class=""
                  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="font-body text-gray-900 text-xl font-medium mb-2">
                  Mas que una comunidad
                </h5>
                <p class="text-gray-700 text-base mb-4 font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  laborum, ea officiis quo quibusdam cum iste
                </p>
              </div>
            </div>
          </div>
          {/*card 2 */}

          <div class="flex justify-center">
            <div class="bg-secondary max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class=""
                  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2 font-body">
                  Mas que un deporte
                </h5>
                <p class="text-gray-700 text-base mb-4 font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  laborum, ea officiis quo quibusdam cum iste
                </p>
              </div>
            </div>
          </div>
          {/*card 3 */}
          <div class="flex justify-center">
            <div class="  bg-secondary max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class=""
                  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2 font-body">
                  Mas que un club
                </h5>
                <p class="text-gray-700 text-base mb-4 font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  laborum, ea officiis quo quibusdam cum iste
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
