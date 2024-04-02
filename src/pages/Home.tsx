import DataTable from "../components/DataTable";
import { useLoaderData } from "react-router-dom";
import Tag from "../models/Tag";
import TagsData from "../models/TagsData";

const Home = () => {
  const tagsData = useLoaderData() as TagsData;

  return (
    <DataTable<Tag>
      data={tagsData ? tagsData.items : []}
      keyNames={["name", "count"]}
      columnNames={["Tag name", "Count"]}
    />
  );
};

export default Home;

export const tagsDataLoader = async () => {
  const response = await fetch(
    "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow&key=dD4kEfcU7eiZkzj9eOBFsQ(("
  );
  if (!response.ok) {
    console.log("error");
  } else {
    const data: TagsData = await response.json();
    return data;
  }
};
