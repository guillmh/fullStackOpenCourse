import React from "react";
import { Text, Flex, TextField, Heading } from "@radix-ui/themes";
import {
  MagnifyingGlassIcon,
  InfoCircledIcon,
  PersonIcon,
  MobileIcon,
} from "@radix-ui/react-icons";

const Filter = ({ searchName, handleChange, persons }) => {
  //Busca un si existe el nombre en el array de personas
  const searchPerson = searchName
    ? persons.find(
        (person) => person.name.toLowerCase() === searchName.toLowerCase()
      )
    : null;

  return (
    <Flex gap="3" direction={"column"} m={"2"} p={"2"}>
      <Heading as="h2" size={"4"} weight={"medium"}>
        Filter Shown With
      </Heading>
      <div>
        <TextField.Root
          name="searchName"
          value={searchName}
          onChange={handleChange}
          placeholder="search for contact..."
          color="gray"
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="18" width="18" />
          </TextField.Slot>
        </TextField.Root>

        {searchName && (
          <div>
            {searchPerson ? (
              <Flex align={"center"} gap={"1"}>
                <PersonIcon height="14" width="14" color="green" />
                <Text color="green">: {searchPerson.name}</Text>
                <MobileIcon height="14" width="14" color="green" />
                <Text color="green">: {searchPerson.number}</Text>
              </Flex>
            ) : (
              <Flex align={"center"} gap={"2"}>
                <InfoCircledIcon height="14" width="14" color="yellow" />
                <Text color="yellow">{searchName} no fue encontrado.</Text>
              </Flex>
            )}
          </div>
        )}
      </div>
    </Flex>
  );
};

export default Filter;
