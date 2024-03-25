import type { Meta, StoryObj } from "@storybook/react";

import DictionaryContainer from ".";

const meta = {
  title: "components/Dictionary/DictionaryContainer",
  component: DictionaryContainer,
  tags: ["autodocs"],
  argTypes: {
    currentWord: { description: "Value entered by the user" },
  },
} satisfies Meta<typeof DictionaryContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WordDefinition: Story = {
  name: "Display the word of the word chosen by the user, and the phonetic of this word",
  args: {
    currentWord: "Cat",
  },
};
