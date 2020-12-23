const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#9a35ef",
              "@border-radius-base": "6px",
              "@font-family":
                "-apple-system, BlinkMacSystemFont, Roboto, sans-serif"
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};

// --plain-text-color: #f0f0f0;
// --input-text-color: #fff;
// --text-highlight-color: var(--input-text-color);
// --input-background-color: transparent;
// --input-inactive-highlight-color: #999;
// --input-active-highlight-color: #9a35ef;
// --input-filled-highlight-color: var(--input-inactive-highlight-color);
// --error-color: #ff5b83;
// --input-invalid-highlight-color: var(--error-color);
// --input-valid-highligh-color: #69dbb1;
// --label-active-color: #999;
// --label-inactive-color: #c8c8c8;
// --label-font-size: 16px;
// --button-border-radius: 2em;
// --button-bg-color: #7b2abf;
// --button-hover-bg-color: #9a35ef;
// --button-text-color: #fff;
// --button-text-disabled-color: #7f7f7f;
// --button-border: 2px solid #fff;
// --button-border-disabled: 2px solid #7f7f7f;
// --button-hover-bg-image: none;
// --button-hover-border: 2px solid var(--input-active-highlight-color);
// --link-color: #bac7ff;
// --column-gutter-size: 16px;
// --toast-bg-color: #bac7ff;
// --toast-text-color: #0f0f0f;
// --subtitle-color: var(--input-inactive-highlight-color);
// --tooltip-bg-color: #000;
// --dot-color: #bda3f5;
// --dot-inactive-color: #232323;
// --footer-min-height: 100px;
// --recaptcha-text-color: var(--subtitle-color);
