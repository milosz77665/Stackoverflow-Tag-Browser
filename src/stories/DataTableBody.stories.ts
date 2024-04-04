import type { Meta, StoryObj } from "@storybook/react";
import DataTableBody from "../components/DataTableBody";

const meta: Meta<typeof DataTableBody> = {
  title: "DataTableBody",
  component: DataTableBody,
  argTypes: {
    keyNames: { type: "string" },
  },
};

export default meta;

type Story = StoryObj<typeof DataTableBody>;

export const Base: Story = {
  args: {
    visibleData: [
      { "1": "abc", "2": "def" },
      { "1": "def", "2": "abc" },
    ],
    keyNames: ["1", "2"],
  },
};
