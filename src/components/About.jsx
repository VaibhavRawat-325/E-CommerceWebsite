import React from "react";
import { GrAmazon } from "react-icons/gr";

function About() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-medium text-gray-700">About Us</h1>
        <p className="text-gray-500 text-xl mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="flex">
        <div>
          <div className="flex flex-col w-96">
            <h1 className="text-4xl text-gray-700 font-medium">
              We Are Your Favourite, Online Store.
            </h1>
          </div>
          <p className="text-gray-500 text-xl mt-5">
            Dui habitasse provident eu etiam praesent placeat maiores
            temporibus, accumsan parturient autem, mi animi ipsa. Lobortis
            maxime quos, pellentesq. Ee platea animi commodo tincidunt ridiculus
            tempora, ornare lorem quam sit possimus? Quam cras facilisi officia
            fusce. Ac, excepteur excepteur fusce? Sunt minim expedita magnis!
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <span className="text-orange-500 text-xl">
              <GrAmazon />
            </span>
            <h1 className="text-gray-700 text-2xl mt-2 font-medium">
              Eros Imperdie
            </h1>
            <p className="text-gray-500 text-xl mt-5">
              We’ll generate a sitemap for your site, submit it to search engine
              is and track.
            </p>
          </div>
          <div>
            <span className="text-orange-500 text-xl">
              <GrAmazon />
            </span>
            <h1 className="text-gray-700 text-2xl mt-2 font-medium">
              Eros Imperdie
            </h1>
            <p className="text-gray-500 text-xl mt-5">
              We’ll generate a sitemap for your site, submit it to search engine
              is and track.
            </p>
          </div>
          <div>
            <span className="text-orange-500 text-xl">
              <GrAmazon />
            </span>
            <h1 className="text-gray-700 text-2xl mt-2 font-medium">
              Eros Imperdie
            </h1>
            <p className="text-gray-500 text-xl mt-5">
              We’ll generate a sitemap for your site, submit it to search engine
              is and track.
            </p>
          </div>
          <div>
            <span className="text-orange-500 text-xl">
              <GrAmazon />
            </span>
            <h1 className="text-gray-700 text-2xl mt-2 font-medium">
              Eros Imperdie
            </h1>
            <p className="text-gray-500 text-xl mt-5">
              We’ll generate a sitemap for your site, submit it to search engine
              is and track.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
