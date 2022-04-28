module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
          ".env",
        ],
        root: ["./src"],
        alias: {
          "@screens": "./src/screens",
          "@navigation": "./src/navigation",
          "@components": "./src/components",
          "@constants": "./src/constants",
          "@assets": "./src/assets",
          "@helpers": "./src/helpers",
          "@store": "./src/store",
          "@services": "./src/services",
          "@hooks": "./src/hooks",
          "@styles": "./src/styles",
          "@types": "./src/types",
        },
      },
    ],
    ["@babel/plugin-proposal-optional-chaining"],
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
