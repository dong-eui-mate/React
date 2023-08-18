import { Table } from "../Components/Table_Component";
import { Footer } from "../layout/Footer_layout";
import { Header } from "../layout/Headers_layout";
import { Nav } from "../layout/Nav_layout";

const TimeTable = () => {
  return (
    <>
      <Header Title="Class" />
      <Nav />
      <Table />
      <Footer />
    </>
  );
};

export { TimeTable };
