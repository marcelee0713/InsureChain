import React from "react";

const Challenge = () => {
  const [selectedStatus, setSelectedStatus] = React.useState("All");
  const [dropdownVisible, setDropdownVisible] = React.useState(false);
  const [card, setCard] = React.useState([
    {
      status: "Daily",
      title: "Daily Steps Challenge",
      description: "Walk 10,000 steps in a day.",
      points: 100,
    },
    {
      status: "Weekly",
      title: "Weekly Steps Challenge",
      description: "Walk 70,000 steps in a week.",
      points: 500,
    },
    {
      status: "Daily",
      title: "Another Daily Challenge",
      description: "Complete a daily task.",
      points: 50,
    },
    {
      status: "Monthly",
      title: "Monthly Challenge",
      description: "Read 5 books in a month.",
      points: 200,
    },
  ]);
  const [filteredCard, setFilteredCard] = React.useState([...card]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleFilter = (status: string) => {
    if (status === "All") {
      setFilteredCard([...card]);
    } else {
      const filtered = card.filter((c) => c.status === status);
      setFilteredCard(filtered);
    }
    setSelectedStatus(status);
    toggleDropdown();
  };

  const cards = filteredCard.map((x) => {
    return (
      <div
        key={x.title}
        className="w-full h-[180px] bg-boxColor mb-10 px-6 py-4"
      >
        <div className="flex justify-between items-center">
          <h2 className="bg-black font-bold text-primary w-fit px-5 py-1 rounded-lg uppercase">
            {x.status}
          </h2>
          <h2 className="font-openSans font-bold">{x.points} Points</h2>
        </div>
        <div className="flex justify-between items-center my-5 ">
          <div>
            <h1 className="font-bold text-3xl">{x.title}</h1>
            <p className="px-3 py-3">{x.description}</p>
          </div>
          <div>
            <button className="bg-secondary rounded-full px-8 py-2.5 text-primary text-base">
              Start
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="py-10 px-20 w-full relative">
      <h1 className="font-bold text-4xl">Challenges</h1>
      <div className="flex justify-between items-center w-full mb-3 mt-5">
        <button
          onClick={toggleDropdown}
          className="bg-boxColor rounded-full text-black hover:bg-black hover:text-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          {selectedStatus}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {dropdownVisible && (
          <div
            id="dropdown"
            className="absolute top-[138px] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-2"
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer">
              <li>
                <a
                  onClick={() => handleFilter("All")}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  All
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleFilter("Daily")}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Daily
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleFilter("Weekly")}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Weekly
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleFilter("Monthly")}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Monthly
                </a>
              </li>
            </ul>
          </div>
        )}
        <h2>View your challenges</h2>
      </div>
      {cards}
    </div>
  );
};

export default Challenge;
