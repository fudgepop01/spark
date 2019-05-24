# Plan for GCT Lang

---

## compilation format

```md
bits:

1-4 (0x_00000000):
- 1-3: codetype
- 4: base address vs. pointer address


5-8 (0x0_000000)
- 4-7: code sub type
- 8: address... (this means that any address >= 0x01000000 must be "odd" here)

9-16 (0x00______)
- 9-16: address


```

## decompiler format

### Direct RAM writes

```js
writeFill8({
  // 00 | 10
  addressType: "base" | "pointer",
  // if number > 0x01000000 (16777216) then codeType++
  addressValue: <<number>>,
  value: <<number <= 0xFF>>,
  repeat: <<number <= 0xFFFF>>
})

// example

writeFill8({
  addressType: "base",
  addressValue: 1234,
  value: 42,
  repeat: 69
}) // => 000004D82 0045002A (0)(0 • 004D2A)(0045)(002A)
```

```js
writeFill16({
  // 0_... | 1_...
  addressType: "base" | "pointer",
  // if number > 0x01000000 (16777216) then codeType++
  addressValue: <<number>>,
  value: <<number <= 0xFFFF>>,
  repeat: <<number <= 0xFFFF>>
})

// example

writeFill16({
  addressType: "pointer",
  addressValue: 5678,
  value: 4200,
  repeat: 690
}) // => 1200162E 02B21068 (1)(2 • 00162E)(02B2)(1068)
```

```js
write32({
  // 0_... | 1_...
  addressType: "base" | "pointer",
  // if number > 0x01000000 (16777216) then codeType++
  addressValue: <<number>>,
  value: <<number <= 0xFFFF>>
})

// example

write32({
  addressType: "base",
  addressValue: 5678,
  value: 12345678
}) // => 0400162E 00BC614E (1)(2 • 00162E)(00BC614E)
```

```js
writeString({
  // 0_... | 1_...
  addressType: "base" | "pointer",
  // if number > 0x01000000 (16777216) then codeType++
  addressValue: <<number>>,
  value: <<string>>
});

// value is automatically broken down into bytes when encoded.
// "number of bytes to write" is value.length

// example

writeString({
  addressType: "base",
  addressValue: 31,
  value: "Hello World"
}) /* =>
06000010 00BC614E
48656C6C 6F20576F
726C64__ ________

(0)(6 • 00001F)(0000000B)
(utf8-encoded character values)
*/
```

```js
slide[8 | 16 | 32]({
  // 0_... | 1_...
  addressType: "base" | "pointer",
  // if number > 0x01000000 (16777216) then codeType++
  initialAddress: <<number>>,
  initialValue: <<string>>,
  count: <<number != 0 && <= 0xFFF >>,
  addressIncrement: <<number <= 0xFFFF >>,
  valueIncrement: <<number <= 0xFFFFFFFF >>
});
```

### if codes

```js
if[16 | 32](("base" | "pointer") ("==" | "!=" | ">" | "<" | ">") (<<number>>))

// value

// example

writeFill16({
  addressType: "base",
  addressValue: 5678,
  value: 4200,
  repeat: 690
}) // => 1200162E 02B21068 (1)(2 • 00162E)(02B2)(1068)
```

### Base Address

### Pointer Address

### Flow Control

### Gecko Register

### Gecko Register if codes

### Counter if codes

### ASM codes