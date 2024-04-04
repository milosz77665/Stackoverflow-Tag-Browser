import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "../components/DataTable";

const meta: Meta<typeof DataTable> = {
  title: "DataTable",
  component: DataTable,
};

export default meta;

type Story = StoryObj<typeof DataTable>;

export const Base: Story = {
  args: {
    data: [
      { "1": "abc", "2": "def" },
      { "1": "def", "2": "abc" },
    ],
    keyNames: ["1", "2"],
    columnNames: ["1", "2"],
  },
};
