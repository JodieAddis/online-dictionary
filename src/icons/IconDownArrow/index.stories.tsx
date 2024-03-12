import type { Meta, StoryObj } from "@storybook/react";

import IconDownArrow from ".";

const meta = {
  title: "icons/ IconDownArrow",
  component: IconDownArrow,
} satisfies Meta<typeof IconDownArrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DownArrowIcon: Story = {
  name: "Icon allowing the opening of a section with multiple options",
};
