const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

module.exports = (() => {
    const config = getDefaultConfig(__dirname);

    // Configuração do nativewind
    return withNativeWind(config, { input: './src/global.css' });
})();
