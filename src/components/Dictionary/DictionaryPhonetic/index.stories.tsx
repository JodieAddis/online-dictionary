import type { Meta, StoryObj } from "@storybook/react";

import DictionaryPhonetic from ".";

const meta = {
  title: "components/Dictionary/DictionaryPhonetic",
  component: DictionaryPhonetic,
  tags: ["autodocs"],
  argTypes: {
    wordInput: { description: "Value entered by the user" },
  },
} satisfies Meta<typeof DictionaryPhonetic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WordDefinition: Story = {
  name: "Display the word of the word chosen by the user, and the phonetic of this word",
  args: {
    wordInput: "Cat",
  },
};
