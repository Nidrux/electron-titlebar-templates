const {readdir } = require('fs');
const path = require('path');
(async () => {
    await readdir(path.join(__dirname, '/preloads/'), (err, files) => {
        if(err) console.error(err);
        files.forEach(x => {
            require(path.join(__dirname, `/preloads/${x}`));
        })
    })
})();



