import DataTable from "../components/DataTable";
import { Await, defer, useLoaderData } from "react-router-dom";
import Tag from "../models/Tag";
import TagsData from "../models/TagsData";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorInfo from "../components/ErrorInfo";

const Home = () => {
  const { tagsData } = useLoaderData() as { tagsData: TagsData };

  return (
    <Suspense fallback={<LoadingSpinner size={80} />}>
      <Await resolve={tagsData} errorElement={<ErrorInfo>Could not fetch tags data</ErrorInfo>}>
        {(loadedTagsData: TagsData) => (
          <DataTable<Tag>
            data={loadedTagsData ? loadedTagsData.items : []}
            keyNames={["name", "count"]}
            columnNames={["Tag name", "Count"]}
          />
        )}
      </Await>
    </Suspense>
  );
};

export default Home;

const fetchTagsData = async () => {
  try {
    const response = await fetch(
      "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow&key=dD4kEfcU7eiZkzj9eOBFsQ(("
    );
    if (response.ok) {
      const data: TagsData = await response.json();
      return data;
    }
  } catch (error) {
    throw error;
  }
};

export const tagsDataLoader = async () => {
  return defer({
    tagsData: fetchTagsData(),
  });
};
