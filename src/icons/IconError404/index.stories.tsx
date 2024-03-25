import type { Meta, StoryObj } from "@storybook/react";

import IconError404 from ".";

const meta = {
  title: "icons/IconError404",
  component: IconError404,
} satisfies Meta<typeof IconError404>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListTypo: Story = {
  name: "404 error icon",
};
