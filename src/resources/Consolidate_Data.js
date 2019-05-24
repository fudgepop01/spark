const fs = require('fs');

const Events = fs.readFileSync('./Events.txt', {encoding: 'utf-8'});
const Parameters = fs.readFileSync('./Parameters.txt', {encoding: 'utf-8'});
// const EventListView = fs.readFileSync('./EventListView.txt', {encoding: 'utf-8'});
// const Requirements = fs.readFileSync('./Requirements.txt', {encoding: 'utf-8'});

let out = {};

let pointer;
for (let [i, data] of Events.split('\n').entries()) {
  switch (i % 5) {
    case 0:
      pointer = data;
      out[pointer] = {};
      break;
    case 1:
      out[pointer].name = data;
      break;
    case 2:
      out[pointer].description = data;
      break;
    case 3:
      out[pointer].parameters = [];
      for (let num of data.split('')) {
        out[pointer].parameters.push(({
          0: 'value',
          1: 'scalar',
          2: 'pointer',
          3: 'boolean',
          4: 'undefined',
          5: 'variable',
          6: 'requirement'
        })[num]);
      }
      break;
  }
}

let sections = Parameters.split('\n\n').entries();
for (let [i, section] of sections) {
  for (let [j, entry] of section.split('\n').entries()) {
    if (j === 0) {
      pointer = entry;
      for (let [i, varType] of out[pointer].parameters.entries()) {
        out[pointer].parameters[i] = { 'type': varType };
      }
      continue;
    }
    console.log(entry)
    switch(j % 2) {
      case 0:
        console.log(j)
        out[pointer].parameters[Math.floor((j-1) / 2)].description = entry;
        break;
      case 1:
        console.log(j)
        if (out[pointer].parameters.length === 0) out[pointer].parameters.push({ 'type': 'value' });
        else if (out[pointer].parameters[Math.floor((j-1) / 2)] == undefined) out[pointer].parameters.push({ 'type': 'unknown' });
        out[pointer].parameters[Math.floor((j-1) / 2)].label = entry;
        break;
    }

  }
}

fs.writeFileSync('./Events.json', JSON.stringify(out, null, 2));