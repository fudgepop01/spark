import {writeFileSync} from 'fs';
import parser from './syntax';

const codeToParse = `
* E0000000 80008000
* 225664EC 00000000
`.replace(/\n|\r| |\*/g, "");

const codeAsBin = Buffer.from(codeToParse, "hex");

writeFileSync(`${__dirname}/out.txt`, parser(codeAsBin), 'utf8');