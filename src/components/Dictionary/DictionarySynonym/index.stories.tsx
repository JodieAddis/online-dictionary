import type { Meta, StoryObj } from "@storybook/react";

import DictonarySynonym from ".";

const meta = {
  title: "components/Dictionary/DictonarySynonym",
  component: DictonarySynonym,
  tags: ["autodocs"],
  argTypes: {
    wordInput: { description: "Value entered by the user" },
  },
} satisfies Meta<typeof DictonarySynonym>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WordDefinition: Story = {
  name: "Display synonyms of the word chosen by the user",
  args: {
    wordInput: "Cat",
  },
};
