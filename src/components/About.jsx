import React from "react";
import { GrAmazon, GrCodepen, GrSafariOption, GrWindows } from "react-icons/gr";

function About() {
  return (
    <div>
      <div className="max-w-6xl mx-auto bg-white my-10">
        <div className="text-center flex flex-col items-center pt-10">
          <h1 className="text-5xl font-medium text-gray-700">About Us</h1>
          <div className="w-2/3">
            <p className="text-gray-500 text-xl mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div className="flex mt-32 max-w-5xl mx-auto">
          <div className="w-3/5">
            <div className="flex flex-col w-96">
              <h1 className="text-3xl text-gray-700 font-medium">
                We Are Your Favourite, Online Store.
              </h1>
            </div>
            <p className="text-gray-500 text-lg mt-5">
              Dui habitasse provident eu etiam praesent placeat maiores
              temporibus, accumsan parturient autem, mi animi ipsa. Lobortis
              maxime quos, pellentesq. Ee platea animi commodo tincidunt
              ridiculus tempora, ornare lorem quam sit possimus? Quam cras
              facilisi officia fusce. Ac, excepteur excepteur fusce? Sunt minim
              expedita magnis!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 ml-10 w-2/5">
            <div>
              <span className="text-orange-500 text-2xl">
                <GrAmazon />
              </span>
              <h1 className="text-gray-700 text-xl mt-2 font-medium">
                Eros Imperdie
              </h1>
              <p className="text-gray-500 text-lg mt-5">
                We’ll generate a sitemap for your site, submit it to search
                engine is and track.
              </p>
            </div>
            <div>
              <span className="text-orange-500 text-2xl">
                <GrCodepen />
              </span>
              <h1 className="text-gray-700 text-xl mt-2 font-medium">
                Eros Imperdie
              </h1>
              <p className="text-gray-500 text-lg mt-5">
                We’ll generate a sitemap for your site, submit it to search
                engine is and track.
              </p>
            </div>
            <div>
              <span className="text-orange-500 text-2xl">
                <GrSafariOption />
              </span>
              <h1 className="text-gray-700 text-xl mt-2 font-medium">
                Eros Imperdie
              </h1>
              <p className="text-gray-500 text-lg mt-5">
                We’ll generate a sitemap for your site, submit it to search
                engine is and track.
              </p>
            </div>
            <div>
              <span className="text-orange-500 text-2xl">
                <GrWindows />
              </span>
              <h1 className="text-gray-700 text-xl mt-2 font-medium">
                Eros Imperdie
              </h1>
              <p className="text-gray-500 text-lg mt-5">
                We’ll generate a sitemap for your site, submit it to search
                engine is and track.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-32 bg-orange-500 flex justify-center items-center">
        <div className="flex gap-5">
          <h1 className="text-5xl font-medium text-white">
            Get best offers on customized design!
          </h1>
          <button className="text-lg text-gray-100 border border-white px-4 py-2 rounded-md hover:bg-orange-600">
            GET STARTED {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
