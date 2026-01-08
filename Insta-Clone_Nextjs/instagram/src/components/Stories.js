"use client";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import List from "./ui/List";
import Story from "./Story";
import { useSession } from "next-auth/react";
// import faker from "faker";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();
  const createRandomUser = (index) => {
    return {
      id: index,
      username: faker.internet.username().toLowerCase(),
      name: faker.person.fullName(),
      otherPerson: faker.person.fullName(),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
      company: faker.company.name(),
      address: faker.location.streetAddress(), // Pehle address.streetAddress() tha
    };
  };
  //   console.log(createRandomUser(0))

  useEffect(() => {
    const users = [...Array(20)].map((_, i) => createRandomUser(i));
    setSuggestions(users); //chance of loop but its just a warning
  }, []);

  return (
    <div className="flex items-center">
      <div className="flex gap-3 overflow-x-scroll scrollbar-hide bg-primary rounded-sm p-2">
        {session?.user && (
          <Story img={session?.user?.image} username={session.user?.name} />
        )}
        <List
          list={suggestions}
          render={(
            user //render prop pattern
          ) => (
            <Story key={user.id} img={user.avatar} username={user.username} />
          )}
        />
      </div>
    </div>
  );
}

export default Stories;
