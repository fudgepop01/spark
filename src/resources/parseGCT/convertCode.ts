import {writeFileSync} from 'fs';
import parser from './syntax';

const codeToParse = `
* 46000018 00000000
* 44000000 0003AF60
* 66200005 00000000
* E0000000 80008000
* 2F70662F 73746167
* 652F6375 73746F6D
* 2F73745F 25303258
* 00000000 00000000
* C203AF54 0000000C
* 5700103A 38843560
* 38610050 7C84002E
* 3CA08003 60A5AF5C
* 80A50000 28050100
* 40A00038 9421FF80
* 90610008 38610010
* 3C808003 6084AF60
* 80840000 3D80803F
* 618C89FC 7D8903A6
* 4E800421 38810010
* 80610008 80210000
* 60000000 00000000
* C203B980 0000000A
* 7C84C82E 3CA08059
* 60A5C6D0 7C042800
* 40A20038 3CC08003
* 60C6AF60 80A6FFFC
* 28050100 40A00024
* 80860000 3861FF88
* 3D80803F 618C89FC
* 7D8903A6 4E800421
* 3881FF88 38610048
* 60000000 00000000
* 0403AF58 4800000C
* 046B593C 60000000
* 046B842C 60000000
* C26B8C0C 00000005
* 38800001 80D86060
* 28060005 40A1000C
* 989B0398 48000010
* 3CC0803F 60C6AF60
* 90C6FFFC 00000000
* C26B5864 0000001D
* 546005EF 41A200DC
* 3FC08152 63DEC5E0
* 83DE0010 83DE0130
* C03E0018 FC20081E
* D821FFF8 8001FFFC
* 2C000000 418200B0
* 2C000050 418200A8
* 2C000051 418200A0
* 2C000054 41820098
* 2C000052 4080006C
* 38000000 901E0018
* 3FC0815E 809E25C8
* 63DE83E0 901E0000
* 819D0008 980C0398
* 807D0228 3D80806B
* 618C8F50 7D8903A6
* 4E800421 3D80800A
* 618CF614 7D8903A6
* 4E800421 3D808003
* 618CAF5C 906C0000
* 38800002 909D0228
* 3D80806B 618C5928
* 7D8903A6 4E800420
* 38000000 3FC0815E
* 63DE83E0 901E0000
* 83DD0008 981E0398
* 3FC08003 63DEAF5C
* 93DE0000 546005EF
* 60000000 00000000
`.replace(/\n|\r| |\*/g, "");

const codeAsBin = Buffer.from(codeToParse, "hex");

writeFileSync(`${__dirname}/out.txt`, parser(codeAsBin), 'utf8');