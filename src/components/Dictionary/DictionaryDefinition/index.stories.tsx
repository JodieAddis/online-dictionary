import type { Meta, StoryObj } from "@storybook/react";

import DictionaryDefinition from ".";

const meta = {
  title: "components/Dictionary/DictionaryDefinition",
  component: DictionaryDefinition,
  tags: ["autodocs"],
  argTypes: {
    wordInput: { description: "Value entered by the user" },
  },
} satisfies Meta<typeof DictionaryDefinition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WordDefinition: Story = {
  name: "Definition of the word chosen by the user",
  args: {
    wordInput: "Cat",
  },
};
