const fs = require("fs");
const path = require("path");

const ASSETS_SVG = path.resolve(__dirname, "../assets/svg");
const ASSETS_FONTS = path.resolve(__dirname, "../assets/fonts/");
const STYLE_TEMPLATES = path.resolve(__dirname, "../assets/styleTemplates/");
const svgtofont = require("svgtofont");

function writeFileList(filePath, data) {
  try {
    if (Object.keys(data).length) {
      fs.writeFile(filePath, JSON.stringify(data), (error) => {
        if (error) {
          console.log(`write file stackList error: ${error}`);
        } else {
          console.log("write file stackList success");
        }
      });
    }
  } catch (error) {
    console.log(`write file name error: ${error}`);
  }
}

svgtofont({
  src: `${ASSETS_SVG}`, // svg path
  dist: ASSETS_FONTS, // output path
  styleTemplates: STYLE_TEMPLATES, // output css file
  fontName: "font-icon", // font name
  css: true, // Create CSS files.
  outSVGReact: false,
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true,
  },
  website: {
    title: "font-icon",
    // Must be a .svg format image.
    logo: `${ASSETS_SVG}/accounts.svg`,
    version: "1.0.1",
    index: "font-class",
    meta: {
      description: "Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.",
      keywords: "svgtofont,TTF,EOT,WOFF,WOFF2,SVG",
    },
    description: "",
    // Add a Github corner to your website
    // Like: https://github.com/uiwjs/react-github-corners
    corners: {
      url: "https://github.com/jaywcjlove/svgtofont",
      width: 62, // default: 60
      height: 62, // default: 60
      bgColor: "#dc3545", // default: '#151513'
    },
    links: [
      {
        title: "GitHub",
        url: "https://github.com/jaywcjlove/svgtofont",
      },
      {
        title: "Feedback",
        url: "https://github.com/jaywcjlove/svgtofont/issues",
      },
      {
        title: "Font Class",
        url: "index.html",
      },
      {
        title: "Unicode",
        url: "unicode.html",
      },
      {
        title: "Symbol",
        url: "symbol.html",
      },
    ],
    footerInfo:
      'Licensed under MIT. (Yes it\'s free and <a href="https://github.com/jaywcjlove/svgtofont">open-sourced</a>',
  },
}).then(() => {
  console.log("done!");
});

try {
  fs.readdir(ASSETS_SVG, (err, files) => {
    const fileNames = {};

    files.forEach((fileItem) => {
      const name = fileItem.split(".")[0];
      if (!name) {
        return;
      }
      fileNames[name] = name;
    });

    writeFileList(`${ASSETS_FONTS}/svgFileName.json`, fileNames);
  });
} catch (error) {
  console.log(`write file name error: ${error}`);
}
