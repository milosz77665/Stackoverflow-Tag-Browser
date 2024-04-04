import type { Meta, StoryObj } from "@storybook/react";
import LoadingSpinner from "../components/LoadingSpinner";

const meta: Meta<typeof LoadingSpinner> = {
  title: "LoadingSpinner",
  component: LoadingSpinner,
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Base: Story = {
  args: {
    size: 60,
  },
};
