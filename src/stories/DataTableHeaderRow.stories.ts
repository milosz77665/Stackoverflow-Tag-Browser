import type { Meta, StoryObj } from "@storybook/react";
import DataTableHeaderRow from "../components/DataTableHeaderRow";

const meta: Meta<typeof DataTableHeaderRow> = {
  title: "DataTableHeaderRow",
  component: DataTableHeaderRow,
};

export default meta;

type Story = StoryObj<typeof DataTableHeaderRow>;

export const Base: Story = {
  args: {
    keyNames: ["1", "2"],
    columnNames: ["1", "2"],
    order: "asc",
    orderBy: "1",
    onSortClick: () => {},
  },
};
