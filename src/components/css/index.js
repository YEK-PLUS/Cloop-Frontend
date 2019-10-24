const fs = require('fs');
const postcss = require('postcss');
const atImport = require('postcss-import');

const inputFile = 'src/components/css/tailwind.input.css';
const outputFile = 'src/components/css/tailwind.output.css';
const css = fs.readFileSync(inputFile, 'utf8');

// eslint-disable-next-line no-console
console.log('\t🚀 Converting... src/components/css/tailwind.input.css');
postcss()
  .use(atImport())
  .process(css, {
    from: inputFile,
  })
  .then((result) => {
    const output = result.css;
    try {
      fs.unlinkSync(outputFile);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('\t✖ Output file not found');
    }
    fs.writeFile(outputFile, output, () => {
      // eslint-disable-next-line no-console
      console.log('\t✅ Converted... src/components/css/tailwind.output.css');
    });
  });
