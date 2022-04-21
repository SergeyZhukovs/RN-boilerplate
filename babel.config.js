module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
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
        alias: {
          "@screens": "./app/screens",
          "@navigation": "./app/navigation",
          "@components": "./app/components",
          "@constants": "./app/constants",
          "@assets": "./app/assets",
          "@helpers": "./app/helpers",
          "@store": "./app/store",
          "@services": "./app/services",
          "@hooks": "./app/hooks",
          "@styles": "./app/styles",
          "@types": "./app/types",
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
