import React from "react";
import { useState } from "react";

const Dashboard = () => {
  const [cards] = useState([
    {
      id: 1,
      name: "Alain Chavelier1",
      description: "Sales Executive, Company B1",
      location: "911 Twin Tower",
      email: "alainchavelier1@example.com",
    },
    {
      id: 2,
      name: "Alain Chavelier2",
      description: "Sales Executive, Company B2",
      location: "911 Twin Tower",
      email: "alainchavelier2@example.com",
    },
    {
      id: 3,
      name: "Alain Chavelier3",
      description: "Sales Executive, Company B3",
      location: "911 Twin Tower",
      email: "alainchavelier3@example.com",
    },
    {
      id: 4,
      name: "Alain Chavelier4",
      description: "Sales Executive, Company B4",
      location: "911 Twin Tower",
      email: "alainchavelier4@example.com",
    },
    {
      id: 5,
      name: "Alain Chavelier5",
      description: "Sales Executive, Company B5",
      location: "911 Twin Tower",
      email: "alainchavelier5@example.com",
    },
    {
      id: 6,
      name: "Alain Chavelier6",
      description: "Sales Executive, Company B6",
      location: "911 Twin Tower",
      email: "alainchavelier6@example.com",
    },
    {
      id: 7,
      name: "Alain Chavelier7",
      description: "Sales Executive, Company B7",
      location: "911 Twin Tower",
      email: "alainchavelier7@example.com",
    },
    {
      id: 8,
      name: "Alain Chavelier8",
      description: "Sales Executive, Company B8",
      location: "911 Twin Tower",
      email: "alainchavelier8@example.com",
    },
    {
      id: 9,
      name: "Alain Chavelier9",
      description: "Sales Executive, Company B9",
      location: "911 Twin Tower",
      email: "alainchavelier9@example.com",
    },
  ]);

  return (
    <>
      <section>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8 flex justify-center mt-10">
            Insurance Company
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white border border-gray-300 dark:border-gray-400 shadow-lg rounded-lg"
              >
                <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center">
                  <img
                    className="w-20 h-20 mr-0 sm:mr-6 rounded-full mb-4 sm:mb-0"
                    src="../../public/images/vector-profile.png"
                    alt="Profile"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {card.name}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {card.description}
                    </p>
                    <p className="text-sm text-gray-700">{card.location}</p>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <a
                    href=""
                    className="flex flex-col items-center text-blue-500 hover:underline"
                  >
                    {card.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
