System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "foundation": "github:zurb/bower-foundation@5.5.3",
    "typescript": "npm:typescript@1.7.5",
    "github:zurb/bower-foundation@5.5.3": {
      "jquery": "github:components/jquery@2.1.4"
    }
  }
});
