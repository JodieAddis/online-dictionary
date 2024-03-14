import type { Preview } from "@storybook/react";
import "../public/style/tailwind.css";

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;

import documentationTemplate from "./documentationTemplate.mdx";

export default {
  parameters: {
    docs: {
      page: documentationTemplate,
    },
  },
};
