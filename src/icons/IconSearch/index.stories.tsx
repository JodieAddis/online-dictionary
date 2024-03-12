import type { Meta, StoryObj } from "@storybook/react";

import IconSearch from ".";

const meta = {
  title: "icons/ IconSearch",
  component: IconSearch,
} satisfies Meta<typeof IconSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefinitionSearchIcon: Story = {
  name: "Icon associated with the 'input' element for searching definitions",
};
