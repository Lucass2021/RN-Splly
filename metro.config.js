const {getDefaultConfig} = require("expo/metro-config");
const {withNativeWind} = require("nativewind/metro");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Configuração do react-native-svg-transformer
  const {transformer, resolver} = config;
  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter(ext => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  // Configuração do nativewind
  return withNativeWind(config, {input: "./src/global.css"});
})();
