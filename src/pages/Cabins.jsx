import styled from "styled-components";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useState } from "react";
import Button from "../ui/Button";

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <TableHeader>
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </TableHeader>
      <Row type="horizontal">
        <CabinTable />
        <Button
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          Add Cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
