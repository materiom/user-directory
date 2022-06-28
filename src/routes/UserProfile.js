import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

import logo from "../pictures/logo.png";
import userCover from "../pictures/directory/user-cover.png";
import recipes from "../pictures/directory/recipes.svg";
import industry from "../pictures/directory/industry.svg";
import interests from "../pictures/directory/interests.svg";

import { userData } from "../testUsers";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import ContributeYourItemCard from "../components/contribute/ContributeYourItemCard";

import { ConvertHtmlToString } from "../hooks/ConvertHtmlToString"

function UserProfile() {
  // get parameters from the router url
  const params = useParams();

  const [user, updateUser] = useState({});

  // dummy fetch user data
  const getUser = () => {
    const user = userData.filter((user) => user.id === params.userId);

    updateUser(user[0]);
  };
  useEffect(() => getUser(), []);

  const interestsArray =
    user.interests === "NULL" || !user.interests
      ? ""
      : user.interests.split(",").map((item) => {
          return <li className=" capitalize">{item}</li>;
        });

  console.log(user);

  return (
    <div className=" w-full min-h-screen flex flex-col bg-MatLightGrey">
      <Header activePage="connect" />
      <div className="w-full h-[85vh] flex px-36 py-5">
        <div className="h-full flex justify-between flex-wrap w-1/3 bg-white rounded-lg">
          {/* User profile card */}
          <div className="flex rounded-lg">
            <div>
              <div>
                <img src={userCover} alt="user's cover" />
              </div>
              <img
                src={
                  user.profilePicture === "NULL"
                    ? logo
                    : `https://materiom.org/storage/${user.profilePicture}`
                }
                alt="profile"
                className="rounded-full w-1/2 aspect-square mx-auto relative mt-[-25%] bg-MatLightGrey border-2 border-white"
              />
              <div className=" flex flex-col w-full text-center">
                <h4 className="text-MatTeal font-codecColdExtraBold">
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
                <div className="flex w-1/4 min-w-[100px] mx-auto my-3 justify-around text-MatTeal">
                  <BsInstagram />
                  <BsTwitter />
                  <BsLinkedin />
                </div>
                <hr className="w-full h-1 my-3 mx-auto" />
                <div className="flex flex-col p-5 text-left md:max-h-[20vh] overflow-y-scroll">
                  <h4 className=" text-MatTeal font-codecColdExtraBold mb-5">
                    About
                  </h4>
                  <h5>{user.bio === "NULL" ? "" : ConvertHtmlToString(user.bio)}</h5>
          
                </div>
              </div>
            </div>
          </div>
          {/* User profile card END*/}
        </div>
        <div className="h-full flex justify-between flex-wrap w-2/3 bg-MatLightGrey">
          {/* User's recipes and contributions */}
          <div className="flex flex-col w-full h-1/2  pl-5">
            <div className="w-full h-full justify-around rounded-lg bg-white">
            <div className="flex items-center pt-5 px-5">
              <img src={recipes} alt="recipes icon" />
              <h4 className=" font-codecColdExtraBold text-MatTeal ml-3">
                Recipes {"&"} Contributions
              </h4>
            </div>
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
          <div className="flex w-full h-1/2 pt-5">
            <div className="w-full flex justify-start items-start ml-5 rounded-lg bg-white">
              <div className="flex items-start w-1/2 pt-5 px-5 h-full">
                <div className="flex mb-5">
                  <img src={industry} alt="recipes icon" />
                  <h4 className=" font-codecColdExtraBold text-MatTeal ml-3">
                    Industries {"&"} Disciplines
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-start w-1/2 pt-5 px-5 h-full border-l-2 border-MatLightGrey">
                <div className="flex mb-5">
                  <img src={interests} alt="interest icon" />
                  <h4 className=" font-codecColdExtraBold text-MatTeal ml-3">
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

export default UserProfile;