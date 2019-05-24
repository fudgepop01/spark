const fs = require('fs');

let out = JSON.parse(fs.readFileSync('CharSpecific.json'));

for (const fileName of fs.readdirSync('./CharSpecific')) {
  let toAdd = fs.readFileSync(`./CharSpecific/${fileName}`, {encoding: 'utf-8'});
  console.log(fileName)

  out[fileName.substring(0, fileName.length - 4)] = {};
  const thisChar = out[fileName.substring(0, fileName.length - 4)];

  const lines = toAdd.split('\n');

  thisChar.dataSize = parseInt(lines[0].split('DataSize')[1], 16);

  let lineNum = 1;
  thisChar.params = {};
  thisChar.articles = {};
  while (lines[lineNum].length != 1) {
    let parts = lines[lineNum].split(" ");
    let type = "articles";
    if (parts[1].startsWith("Params")) type = "params";
    thisChar[type][parts[1]] = {};
    thisChar[type][parts[1]].relativeOffset = parseInt(parts[0], 16);
    thisChar[type][parts[1]].chunkSize = parseInt(parts[2], 16);
    lineNum += 1;
  }

  lineNum++;

  // parse article data
  while (!lines[lineNum].startsWith("Params")) {
    const article = thisChar.articles[lines[lineNum].trim()];
    lineNum++;

    article.actions = {};
    article.subActions = {};
    article.params = {};
    article.actions.count = parseInt(lines[lineNum].split('-')[0], 16);
    article.subActions.count = parseInt(lines[lineNum].split('-')[1], 16);

    lineNum++;

    while (lines[lineNum].length != 1) {
      const line = lines[lineNum];
      let parts = line.split(" ");
      if (parts[1] == "SubAction") {
        article.subActions[parts[2]] = {
          relativeOffset: parseInt(parts[0], 16)
        }
      }
      else {
        article.params[parts[1]] = {
          relativeOffset: parseInt(parts[0], 16),
          length: parseInt(parts[2], 16)
        }
      }

      lineNum++;
    }
    lineNum += 1;
  }

  // parse Param data
  while (lineNum < lines.length - 1) {
    let param = lines[lineNum].trim();
    let target;
    if (/\D/g.test(param.substring(6))) {
      for (const [name, data] of Object.entries(thisChar.articles)) {
        // if (fileName === "FitToonLink.txt") {console.log(thisChar)}
        if (Object.keys(data.params).includes(param)) {
          target = thisChar.articles[name].params[param];
        }
      }
    }
    else target = thisChar.params[param];
    if (!target) {
      if (!thisChar.unknown) thisChar.unknown = {};
      target = thisChar.unknown
    }

    lineNum++;
    target.name = lines[lineNum].trim();
    target.data = {};
    lineNum += 2;
    while (!lines[lineNum].startsWith("Params") && lineNum < lines.length - 1) {

      let type = "float";
      if (lines[lineNum].startsWith("*")) {
        type = "int";
        lines[lineNum] = lines[lineNum].substr(1);
      }

      target.data[parseInt(lines[lineNum].trim(), 16)] = {
        type: type,
        description: lines[lineNum + 1].trim()
      };

      lineNum += 3;
    }
  }
}

fs.writeFileSync('./CharSpecific.json', JSON.stringify(out, null, 2), {encoding: 'utf-8'});