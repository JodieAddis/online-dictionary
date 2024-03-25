import type { Preview } from "@storybook/react";
import "../public/style/tailwind.css";
import documentationTemplate from "./documentationTemplate.mdx";

export default {
  parameters: {
    docs: {
      page: documentationTemplate,
    },
  },
};
