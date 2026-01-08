"use client";

import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import List from "./ui/List";
import Suggestion from "./Suggestion";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const fakeData = [...Array(5)].map((_, i) => ({
      username: faker.internet.username().toLowerCase(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      id: i,
    }));
    setSuggestions(fakeData);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between px-4 mt-4">
        <span className="text-gray-500 font-semibold">Suggestions for you</span>
        <span className="text-bold">See All</span>
      </div>
      <div className="px-4 pt-1 mt-3">
        <List
          list={suggestions}
          render={(
            suggestion //render prop pattern
          ) => (
            <Suggestion
              key={suggestion.id}
              username={suggestion.username}
              img={suggestion.avatar}
              otherPerson={suggestion.otherPerson}
            />
          )}
        />
      </div>
    </div>
  );
}

export default Suggestions;
