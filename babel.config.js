module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        "extensions": [".ios.js", ".android.js", ".ts", ".json", ".js"],
        "alias": {
          "@module": ["./src/module"],
          "@navigation": ["./src/navigation"],
          "@component": ["./src/component"],
          "@constant": [
            "./src/constant"
          ],
          "@res": [
            "./src/res"
          ],
          "@assets": [
            "./src/assets"
          ],
          "@layout": [
            "./src/layout"
          ],
          "@thirdparty": [
            "./src/thirdparty"
          ],
          "@data": [
            "./src/data"
          ],
          "@di": [
            "./src/di"
          ],
          "@shared-state": [
            "./src/shared-state"
          ],
          "@util": [
            "./src/util"
          ]
        }
      }
    ]
  ]
};
