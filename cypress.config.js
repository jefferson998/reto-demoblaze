const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rgrup7",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video:true,
    retries:1
  },
});
