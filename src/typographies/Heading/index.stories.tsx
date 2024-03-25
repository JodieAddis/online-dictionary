import type { Meta, StoryObj } from "@storybook/react";

import Heading from ".";

const meta = {
  title: "typographies/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    kind: { description: "Specify the type of title used" },
    content: { description: "Title content" },
    css: { description: "Title content style" },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingTypoH1: Story = {
  name: "Display title h1 content",
  args: {
    kind: "h1",
    content: "Cat",
    css: "text-Shark font-medium text-6xl font-bold",
  },
};

export const HeadingTypoH2: Story = {
  name: "Display title h2 content",
  args: {
    kind: "h2",
    content: "noun",
    css: "mr-4 text-xl font-bold italic text-Shark",
  },
};

export const HeadingTypoH3: Story = {
  name: "Display title h3 content",
  args: {
    kind: "h3",
    content: "meaning",
    css: "text-lg font-bold capitalize text-SilverChalice",
  },
};
