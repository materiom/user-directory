// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Pictures
import support from "./../pictures/dashboard/support.svg";
import twitter from "./../pictures/dashboard/twitter.svg";

export default function HelpBox() {
  return (
    <div className="w-full h-full min-h-full pl-10 pt-5 pb-5">
      <div className="w-full h-full min-h-full p-10 flex flex-col justify-around rounded-lg bg-cover bg-[url('./pictures/dashboard/help-box.jpg')]">
        <div className="flex flex-col">
          <h2 className="xl:text-2xl text-md font-extrabold">Need Help?</h2>
          <h5 className="xl:text-lg text-sm w-3/4 text-MatDarkGrey xl:my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h5>
          <div className="flex flex-wrap">
            <div className="flex flex-1 justify-start items-center mr-3 mt-3">
              <a
                data-cy="supportLink"
                href="mailto:hello@materiom.org"
                target="_blank"
                rel="noreferrer"
                className=" bg-white rounded-full p-3  hover:shadow-xl duration-300"
              >
                <img
                  className="min-w-[20px] xl:h-5 h-4"
                  src={support}
                  alt="Contact support"
                />
              </a>
              <div className="flex flex-col text-sm">
                <h4 className="pl-4">Contact</h4>
                <h4 className="pl-4">Support</h4>
              </div>
            </div>
            <div className="flex flex-1 justify-start items-center mt-3">
              <a
                data-cy="twitterLink"
                href="https://twitter.com/materiom_"
                target="_blank"
                rel="noreferrer"
                className=" bg-white rounded-full p-3 hover:shadow-xl duration-300"
              >
                <img
                  className="min-w-[20px] xl:h-5 h-4"
                  src={twitter}
                  alt="Tweet us"
                />
              </a>
              <div className="flex flex-col">
                <h4 className="pl-4">Tweet</h4>
                <h4 className="pl-4">Us</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="xl:text-lg text-md text-MatDarkGrey my-5">
            Phasellus in nibh semper diam consequat sollicitudin ac id enim.
            Phasellus quis dui eget sapien vulputate feugiat.
          </h5>

          <Link
            className="no-underline bg-MatOrange text-white rounded-lg text-center xl:p-5 p-3"
            to="/guide"
          >
            Read guide
          </Link>
        </div>
      </div>
    </div>
  );
}
