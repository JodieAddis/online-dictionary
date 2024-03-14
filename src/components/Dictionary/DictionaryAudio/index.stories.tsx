import type { Meta, StoryObj } from "@storybook/react";

import DictionaryAudio from ".";

const meta = {
  title: "components/Dictionary/DictionaryAudio",
  component: DictionaryAudio,
  tags: ["autodocs"],
  argTypes: {
    wordInput: { description: "Value entered by the user" },
  },
} satisfies Meta<typeof DictionaryAudio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AudioWord: Story = {
  name: "Audio of the word chosen by the user",
  args: {
    wordInput: "Cat",
  },
};
