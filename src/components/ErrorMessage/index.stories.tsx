import type { Meta, StoryObj } from "@storybook/react";

import ErrorMessage from ".";

const meta = {
  title: "components/ErrorMessage",
  component: ErrorMessage,
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error404Message: Story = {
  name: "Display error 404 message",
};
