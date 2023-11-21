import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'b6aodp',
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
      
    },
    specPattern: "**/*.cy.ts",
  },
});
