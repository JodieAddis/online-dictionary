import type { Meta, StoryObj } from "@storybook/react";

import IconMoon from ".";

const meta = {
  title: "icons/IconMoon",
  component: IconMoon,
} satisfies Meta<typeof IconMoon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkModeIcon: Story = {
  name: "Icon representing the dark mode option of the site",
};
