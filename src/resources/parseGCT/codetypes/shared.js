export const sliceStringAtLengths = (target, positions) => {
  let slices = [];
  let positionTracker = 0;
  for (let i = 0; i < positions.length; i++) {
    slices.push(target.substr(positionTracker, positions[i]));
    positionTracker += positions[i];
  }
  slices.push(target.substr(positionTracker));
  return slices;
}

export function toCode(hexValues) {
  let binary = '';
  for (const hex of hexValues) {
    binary += hex.toString(2).padStart(8, '0');
  }
  let slices = sliceStringAtLengths(binary, this.slicePoints);
  let paramValues = slices.map(slice => parseInt(slice, 2));
  let paramStrings = this.parameters.map((param, index) => {
    return param.toCode(paramValues[index]);
  });

  return `${this.name}(${paramStrings.filter((val, index) => this.parameters[index].codeParam).join(', ')})`;
}

export function toHex() {}