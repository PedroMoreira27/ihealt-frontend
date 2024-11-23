module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: ['react-native-reanimated/plugin'],
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
  