import type { Meta, StoryObj } from "@storybook/react";

import IconPlay from ".";

const meta = {
  title: "icons/ IconPlay",
  component: IconPlay,
  tags: ["autodocs"],
  argTypes: {
    onClick: { description: "Click event on the audio player" },
  },
} satisfies Meta<typeof IconPlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AudioPlayIcon: Story = {
  name: "Icon used as a button to activate the audio of the audio player",
  args: {
    onClick: () => {},
  },
};
