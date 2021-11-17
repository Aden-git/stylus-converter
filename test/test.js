const fs = require('fs')
const path = require('path')
const { converter } = require('../lib/index')

function getPath(address) {
  return path.resolve(__dirname, address)
}

const folderPath = '.';

fs.readFile(getPath(`${folderPath}/my-test.styl`), (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    const result = res.toString()

    converter(result, { autoprefixer: false })
      .then((scss) => {
        fs.writeFile(getPath('./my-test.scss'), scss, {}, () => {
        });
      })
});
