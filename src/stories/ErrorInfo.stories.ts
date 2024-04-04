import type { Meta, StoryObj } from "@storybook/react";
import ErrorInfo from "../components/ErrorInfo";

const meta: Meta<typeof ErrorInfo> = {
  title: "ErrorInfo",
  component: ErrorInfo,
};

export default meta;

type Story = StoryObj<typeof ErrorInfo>;

export const Base: Story = {
  args: {
    children: "text",
  },
};
