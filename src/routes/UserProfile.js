// Dependencies
import React, { useState } from "react";

import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

// Components
import Header from "../components/Header";
import ContributeYourItemCard from "../components/contribute/ContributeYourItemCard";

// Pictures
import logo from "../pictures/logo.png";
import userCover from "../pictures/directory/user-cover.png";
import recipes from "../pictures/directory/recipes.svg";
import industry from "../pictures/directory/industry.svg";
import interests from "../pictures/directory/interests.svg";

// Hooks
import { ConvertHtmlToString } from "../hooks/ConvertHtmlToString";
import useUpdateTitle from "../hooks/UpdatePageTitle";

// Dummy data
//import { userData } from "../testUsers";

export default function UserProfile(props) {
  // update page title
  useUpdateTitle(props.title);

  // get parameters from the router url
  // const params = useParams();

  // set initial state
  const [user, updateUser] = useState({});

  // dummy fetch user data
  // Commented out until real user data is available

  // const getUser = () => {
  //   const userArray = userData.filter((user) => user.id === params.userId);
  //   const user = userArray[0];
  //   updateUser(user);
  // };
  // useEffect(() => getUser(), []);

  // if user has interest format them and
  // return and array of list items
  // this is based on legacy data and the
  // shape of the new data show make this redundant
  const interestsArray =
    user.interests === "NULL" || !user.interests
      ? ""
      : user.interests.split(",").map((item) => {
          return <li className="capitalize">{item}</li>;
        });

  return (
    <div className=" flex min-h-screen w-full flex-col bg-MatLightGrey">
      {/* Pass through a string to tell the header which tab to highlight */}
      <Header activePage="connect" />
      <div className="flex h-[85vh] w-full px-36 py-5">
        <div className="flex h-full w-1/3 flex-wrap justify-between rounded-lg bg-white">
          {/* User profile card START*/}
          <div className="flex rounded-lg">
            <div>
              {/* cover image */}
              <div>
                <img src={userCover} alt="user's cover" />
              </div>
              {/* profile picture */}
              <img
                src={
                  user.profilePicture === "NULL"
                    ? logo
                    : `https://materiom.org/storage/${user.profilePicture}`
                }
                alt="profile"
                className="relative mx-auto mt-[-25%] aspect-square w-1/2 rounded-full border-2 border-white bg-MatLightGrey"
              />
              {/* user details START */}
              <div className=" flex w-full flex-col text-center">
                <h4 className="font-codecColdExtraBold text-MatTeal">
                  {user.name}
                </h4>
                <a href="/#">
                  <h5 className="text-MatGrey no-underline">
                    {user.location === "NULL"
                      ? "Earth, Milky Way"
                      : user.location}
                  </h5>
                </a>

                <a href="/#">
                  <h5 className="text-MatGrey no-underline">
                    {user.location === "NULL"
                      ? "Earth, Milky Way"
                      : user.location}
                  </h5>
                </a>
                <div className="mx-auto my-3 flex w-1/4 min-w-[100px] justify-around text-MatTeal">
                  <BsInstagram />
                  <BsTwitter />
                  <BsLinkedin />
                </div>
                <hr className="my-3 mx-auto h-1 w-full" />
                <div className="flex flex-col overflow-y-scroll p-5 text-left md:max-h-[20vh]">
                  <h4 className=" mb-5 font-codecColdExtraBold text-MatTeal">
                    About
                  </h4>
                  <h5>
                    {user.bio === "NULL" ? "" : ConvertHtmlToString(user.bio)}
                  </h5>
                </div>
              </div>
              {/* user details END */}
            </div>
          </div>
          {/* User profile card END*/}
        </div>
        <div className="flex h-full w-2/3 flex-wrap justify-between bg-MatLightGrey">
          {/* User's recipes and contributions START*/}
          <div className="flex h-1/2 w-full flex-col  pl-5">
            <div className="h-full w-full justify-around rounded-lg bg-white">
              <div className="flex items-center px-5 pt-5">
                <img src={recipes} alt="recipes icon" />
                <h4 className=" ml-3 font-codecColdExtraBold text-MatTeal">
                  Recipes {"&"} Contributions
                </h4>
              </div>
              {/* Contributions carousel */}
              <div className="flex w-full">
                <BsChevronCompactLeft className="my-auto text-4xl text-MatLightGrey" />
                <ContributeYourItemCard />
                <ContributeYourItemCard />
                <ContributeYourItemCard />
                <BsChevronCompactRight className="my-auto text-4xl text-MatLightGrey" />
              </div>
            </div>
          </div>
          {/* User's recipes and contributions END*/}

          {/* User's industry and interests */}
          <div className="flex h-1/2 w-full pt-5">
            <div className="ml-5 flex w-full items-start justify-start rounded-lg bg-white">
              <div className="flex h-full w-1/2 items-start px-5 pt-5">
                <div className="mb-5 flex">
                  <img src={industry} alt="recipes icon" />
                  <h4 className=" ml-3 font-codecColdExtraBold text-MatTeal">
                    Industries {"&"} Disciplines
                  </h4>
                </div>
              </div>
              <div className="flex h-full w-1/2 flex-col items-start border-l-2 border-MatLightGrey px-5 pt-5">
                <div className="mb-5 flex">
                  <img src={interests} alt="interest icon" />
                  <h4 className=" ml-3 font-codecColdExtraBold text-MatTeal">
                    Interests
                  </h4>
                </div>
                <ol>{interestsArray}</ol>
              </div>
            </div>
          </div>
          {/* User's industry and interests END*/}
        </div>
      </div>
    </div>
  );
}
