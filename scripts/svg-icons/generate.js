const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const glob = require("glob");
const { optimize } = require("svgo");

// pass --dir=PATH if you need to specify your own SVG folder
const dir = path.join(__dirname, "../../src/icon-assets/svgIcons");
const TARGET_DIR = path.join(
  __dirname,
  "../../src/components/SvgIcon/svg-icons/"
);
const EXPORTS_FILE = path.join(
  __dirname,
  "../../src/components/SvgIcon/index.js"
);

const SVG_BODY = /<svg[^>]*>((.|[\n\r])*)<\/svg>/im;
const SVG_VIEWBOX = /viewBox="(.*?)"/;

const componentTmpl = _.template(
  fs.readFileSync(path.join(__dirname, "./templates/Icon.tmpl"))
);

const exportsTmpl = _.template(
  fs.readFileSync(path.join(__dirname, "./templates/SvgIcon.tmpl"))
);

glob(path.join(dir, "./*.svg"), (err, SVGFiles) => {
  if (err) {
    console.log(err);
    return;
  }

  _.forEach(SVGFiles, async (file) => {
    const SVGString = fs.readFileSync(file).toString();
    if (SVGString) {
      const result = optimize(SVGString, {
        // optional but recommended field
        path: "path-to.svg",
        // all config fields are also available here
        multipass: true,
        plugins: [
          // enable built-in plugins by name
          "prefixIds",
        ],
      });
      const optimizedSvgString = result.data;
      const SVG = SVG_BODY.exec(optimizedSvgString)[1];
      const viewBoxCaptureGroup = SVG_VIEWBOX.exec(optimizedSvgString);
      const viewBox = viewBoxCaptureGroup ? viewBoxCaptureGroup[0] : undefined;
      const fileName = `icon-${path.basename(file, "svg")}`;
      fs.writeFileSync(
        path.join(TARGET_DIR, `${fileName}js`),
        componentTmpl({ SVG, viewBox, iconName: fileName.split(".")[0] })
      );
    }
  });
});

glob(path.join(TARGET_DIR, "./*.js"), (err, files) => {
  if (err) {
    console.log(err);
    return;
  }

  const ICONS = _.zipObject(
    _.map(files, (i) => path.basename(i).split(".")[0]),
    _.map(files, (i) =>
      _.startCase(path.basename(i).split(".")[0]).replace(/\s*/g, "")
    )
  );

  fs.writeFileSync(EXPORTS_FILE, exportsTmpl({ ICONS }));
});
