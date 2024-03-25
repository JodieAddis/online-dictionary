import type { Meta, StoryObj } from "@storybook/react";

import List from ".";

const meta = {
  title: "typographies/List",
  component: List,
  tags: ["autodocs"],
  argTypes: {
    content: {
      description:
        "List content which display one of the definitions of the word entered by the user",
    },
    css: { description: "List content style" },
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListTypo: Story = {
  name: "Display definition of the word",
  args: {
    content: "An animal of the family Felidae",
    css: "text-Shark font-base my-2 list-disc pl-3 ml-10",
  },
};
