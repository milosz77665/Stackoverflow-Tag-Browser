import type { Meta, StoryObj } from "@storybook/react";
import DataTableContainer from "../components/DataTableContainer";

const meta: Meta<typeof DataTableContainer> = {
  title: "DataTableContainer",
  component: DataTableContainer,
};

export default meta;

type Story = StoryObj<typeof DataTableContainer>;

export const Base: Story = {};
