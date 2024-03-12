import type { Meta, StoryObj } from "@storybook/react";

import DictionaryDefinition from ".";

const meta = {
  title: "components/Dictionary/DictionaryDefinition",
  component: DictionaryDefinition,
  tags: ["autodocs"],
} satisfies Meta<typeof DictionaryDefinition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductSection: Story = {
  name: "Section which display data definition from API",
};
