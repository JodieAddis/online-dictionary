import type { Meta, StoryObj } from "@storybook/react";

import IconNewWindow from ".";

const meta = {
  title: "icons/ IconNewWindow",
  component: IconNewWindow,
} satisfies Meta<typeof IconNewWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RedirectIcon: Story = {
  name: "Icon containing a link that redirects to the source site",
};
