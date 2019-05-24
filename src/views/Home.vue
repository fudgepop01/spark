<template>
  <div class="home">
    <div class="container">
      <button class="button" v-on:click="parseData">test_pac</button>
      <button class="button" v-on:click="parseCodeset">test_gekko_GCT</button>
      <button class="button" v-on:click="parseSampleCodeset">test_gekko_SAMPLE</button>
    </div>
    <div class="container" id="editor-container"></div>
    <div class="container" id="hex-display-container"></div>
    <div class="container" id="ASCII-display-container"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import * as monaco from 'monaco-editor';

// necessary for parsing the files
import { Buffer } from 'buffer';
window.Buffer = Buffer;

// personal imports
import parseFile from '../resources/parse_brawl_file/ParseChar.js';
import parseGCT from '../resources/parseGCT/syntax.js';
import hexDump from '../resources/parseGCT/hexDump.js';

const fromHexString = hexString =>
  new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

const getBinFile = (path, callback) => {
  const request = new XMLHttpRequest();
  request.responseType = 'blob';
  request.open('GET', path, true);
  request.onload = () => {
    const reader = new FileReader();
    reader.onload = (blob) => {
      callback(blob.target.result);
    }
    reader.readAsArrayBuffer(request.response);
  }
  request.send();
}

monaco.editor.defineTheme('hexEditor', {
  base: 'vs',
  inherit: 'true',
  rules: [
    {token: 'spacer', foreground: 'dddddd'},
    {token: 'hex', foreground: '777777'},
  ]
});
monaco.languages.register({id: 'hexEditor'});
monaco.languages.setMonarchTokensProvider('hexEditor', {
  defaultToken: 'invalid',
  tokenizer: {
    root: [
      [/(?: ?(?:\d|[a-fA-F]){2} ?){16}/, {token: 'hex'}],
      [/•/, {token: 'spacer'}]
    ]
  }
});

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    parseData() {
      getBinFile('./fighters/FitCaptain.pac', (res) => parseFile(res));
    },
    parseCodeset() {
      getBinFile('./GCT/RSBE01.gct', (res) => {
        let hexData = hexDump(res);
        this.hexEditor.setValue(hexData.text);
        this.hexEditor.binLength = hexData.fullLength;
      });
    },
    parseSampleCodeset() {
      getBinFile('./GCT/BRAWL_TEST_FULL.gct', (res) => {
        let text = parseGCT(res);
        this.editor.setValue(text);
      });
    }
  },
  mounted() {
    this.hexEditor = monaco.editor.create(document.getElementById('hex-display-container'), {
      value: '',
      language: 'hexEditor',
      theme: 'hexEditor',
      lineNumbersMinChars: 8,
      lineNumbers(num) {
        return ((num - 1) * 0x10).toString(16);
      },
    });

    this.hexEditor.changeViewZones((accessor) => {
        let newThing = document.createElement('div');
        accessor.addZone({
            afterLineNumber: 0,
            domNode: document.createElement('div'),
        })
    });
    let digitWidget = {
      domNode: null,
      getId: function() {
        return 'digit.widget';
      },
      getDomNode: function() {
        if (!this.domNode) {
          this.domNode = document.createElement('div');
          this.domNode.innerHTML = '0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F';
          let style = {
            whiteSpace: 'pre',
            background: '#ddd',
            left: '88px',
            fontFamily: 'Consolas',
            fontSize: '14px'
          }
          this.domNode.setAttribute('style', `\
            white-space: pre; background: #ddd;\
            left: 0px;\
            width: 100%;\
            font-family: Consolas;\
            font-size: 14px;\
            color: #2b91af;\
            position: absolute;\
            padding-left: 92px;\
            padding-right: 4px;\
          `);
        }
        return this.domNode;
      },
      getPosition: function() {
        return null;
      }
    };
    this.hexEditor.addOverlayWidget(digitWidget);



    this.hexEditor.onMouseDown((evt) => {
      console.log(evt.target);
      this.hexEditor.setSelections([

      ])
    })
  }
}
</script>

<style lang="stylus" scoped>
// #editor-container
//   height: 500px
//   border: 1px solid black

#hex-display-container
  height: 500px
  border: 1px solid black

</style>
