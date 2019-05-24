import typedarrayToBuffer from 'typedarray-to-buffer';

const hexDump = (binData) => {
  binData = typedarrayToBuffer(binData);
  let strings = "";
  let hex = "";
  let out = "";

  for (let i = 0; i < binData.length; i++) {
    hex += binData[i].toString(16).padStart(2, '0') + " ";
    if (0x21 <= binData[i] && binData[i] < 0x7F) {
      strings += String.fromCharCode(binData[i]);
    } else {
      strings += "•";
    }

    if ((i + 1) % 0x10 == 0) {
      out += `${hex} ${strings}\n`;
      hex = strings = "";
    }
  }

  return {
    text: out,
    fullLength: binData.length
  };
}

export default hexDump;