import Tag from "./Tag";

interface TagsData {
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
  items: Tag[];
}

export default TagsData;
