module.exports = {
    presets: [ '@react-native/babel-preset'],
    // biome-ignore lint/suspicious/noDuplicateObjectKeys: <explanation>
    plugins: ['react-native-reanimated/plugin',],
    plugins: [
      'module:react-native-dotenv',
      [
        'module-resolver',
        {
          extensions: ['.tsx', '.ts', '.js', '.json'],
          root: ['.'],
        },
      ],
    ],
  };
  