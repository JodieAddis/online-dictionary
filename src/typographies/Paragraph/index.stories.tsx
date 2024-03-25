import type { Meta, StoryObj } from "@storybook/react";

import Paragraph from ".";

const meta = {
  title: "typographies/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {
    content: { description: "Text content" },
    css: { description: "Text content style" },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ParagraphTypo: Story = {
  name: "Display text content",
  args: {
    content: "Turtle",
    css: "text-lg font-bold capitalize text-SilverChalice",
  },
};
