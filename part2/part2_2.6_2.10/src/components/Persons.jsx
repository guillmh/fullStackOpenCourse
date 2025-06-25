import React from "react";
import ButtonDelete from "./ButtonDelete";
import { Text, Heading, Flex, Table } from "@radix-ui/themes";

const Persons = ({
  persons,
  setPersons,
  setSuccesMessage,
  setNotification,
}) => {
  return (
    <>
      <Flex gap="3" direction={"column"} m={"2"} p={"2"}>
        <Heading as="h2" size={"4"} weight={"medium"}>
          Numbers
        </Heading>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Number</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {persons.map((person) => (
              <Table.Row key={person.id}>
                <Table.RowHeaderCell>{person.name}</Table.RowHeaderCell>
                <Table.Cell>{person.number}</Table.Cell>
                <Table.Cell>
                  <ButtonDelete
                    person={person}
                    persons={persons}
                    setPersons={setPersons}
                    setSuccesMessage={setSuccesMessage}
                    setNotification={setNotification}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Flex>
    </>
  );
};

export default Persons;
