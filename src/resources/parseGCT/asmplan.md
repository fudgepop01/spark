# Plan for ASM section of GCTLang

---

## Analysis: Breaking down Project M's codes

```js
` PM 1st ASM code
C210F9B4 00000005
2C030014 41820010
2C03002E 41820010
48000010 3860002E
48000008 38600014
7C0903A6 00000000
`
```

This is the first ASM-insertion code in ProjectM's codeset.

---

```js
insertASM({
  // 0_... | 1_...
  addressType: "base" | "pointer",
  // if number > 0x01000000 (16777216) then codeType++
  insertionAddress: <<number>>,
  linecount: <<number>>
},
{
  ASM_GOES_HERE
});
```

in the example above, this would be

```js

insertASM({
  // 0_... | 1_...
  addressType: "base" | "pointer",
  // if number > 0x01000000 (16777216) then codeType++
  insertionAddress: <<number>>,
  linecount: <<number>>
},
`{
  loc_0x0:
    cmpwi r3, 0x14
    beq- loc_0x14
    cmpwi r3, 0x2E
    beq- loc_0x1C
    b loc_0x20

  loc_0x14:
    li r3, 0x2E
    b loc_0x20

  loc_0x1C:
    li r3, 0x14

  loc_0x20:
    mtctr r0
}`);

```