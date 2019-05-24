export interface field {
  label: string;
  description: string;
  bits: Array<Array<number>> | [number, number] | number;
  values?: any
}

export interface fieldAlias {
  label: string;
  equivalency: field;
}

export interface syntax {
  mnemonic: string;
  parameters: Array<string>;
  fieldValues: Array<[field, number]>
}

export interface instruction {
  name: string;
  mnemonic: string;
  syntax: Array<syntax>;
  encoding: Array<field>;
}

//#region field implementations
const spr: field = {
  label: "spr",
  description: `This field is used to specify a special-purpose register for the mtspr and mfspr instructions. The
  encoding is described in Section 4.4.2.2, “Move to/from Special-Purpose Register Instructions
  (OEA)”, in the PowerPC Microprocessor Family: The Programming Environments manual.`,
  bits: [11, 20]
};

const tbr: field = {
  label: "tbr",
  description: `This field is used to specify either the time base lower (TBL) or time base upper (TBU).`,
  bits: [11, 20]
};

const AA: field = {
  label: "AA",
  description: `Absolute address bit.
  0 The immediate field represents an address relative to the current instruction address (CIA). (For
    more information on the CIA, see Table 12-3.) The effective (logical) address of the branch is
    either the sum of the LI field sign-extended to 32 bitsand the address of the branch instruction or
    the sum of the BD field sign-extended to 32 bits and the address of the branch instruction.
  1 The immediate field represents an absolute address. The effective address (EA) of the branch is
    the LI field sign-extended to 32 bitsor the BD field sign-extended to 32 bits.
  Note: The LI and BD fields are sign-extended to 32 bits.`,
  bits: 30
};

const BD: field = {
  label: "BD",
  description: `Immediate field specifying a 14-bit signed two's complement branch displacement that is
  concatenated on the right with 0b00 and sign-extended to 32 bits.`,
  bits: [16, 29]
};

const BI: field = {
  label: "BI",
  description: `This field is used to specify a bit in the CR to be used as the condition of a branch conditional
  instruction.`,
  bits: [11, 15]
};

const BO: field = {
  label: "BO",
  description: `This field is used to specify options for the branch conditional instructions. The encoding is
  described in Section 4.2.4.2, “Conditional Branch Control” in the PowerPC Microprocessor Family:
  The Programming Environments manual.`,
  bits: [6, 10],
  values: {
    '00000': 'Decrement the CTR, then branch if the decremented CTR 0 and the condition is FALSE.',
    '00010': 'Decrement the CTR, then branch if the decremented CTR = 0 and the condition is FALSE.',
    '00100': 'Branch if the condition is FALSE',
    '01000': 'Decrement the CTR, then branch if the decremented CTR 0 and the condition is TRUE.',
    '01010': 'Decrement the CTR, then branch if the decremented CTR = 0 and the condition is TRUE.',
    '01100': 'Branch if the condition is TRUE.',
    '10000': 'Decrement the CTR, then branch if the decremented CTR 0.',
    '10010': 'Decrement the CTR, then branch if the decremented CTR = 0.',
    '10100': 'Branch always.'
  }
};

const crbA: field = {
  label: "crbA",
  description: `This field is used to specify a bit in the CR to be used as a source.`,
  bits: [11, 15]
};

const crbB: field = {
  label: "crbB",
  description: `This field is used to specify a bit in the CR to be used as a source.`,
  bits: [16, 20]
};

const crbD: field = {
  label: "crbD",
  description: `This field is used to specify a bit in the CR, or in the FPSCR, as the destination of the result of an
  instruction.`,
  bits: [6, 10]
};

const crfD: field = {
  label: "crfD",
  description: `This field is used to specify one of the CR fields, or one of the FPSCR fields, as a destination.`,
  bits: [6, 8]
};

const crfS: field = {
  label: "crfS",
  description: `This field is used to specify one of the CR fields, or one of the FPSCR fields, as a source.`,
  bits: [11, 13]
};

const CRM: field = {
  label: "CRM",
  description: `This field mask is used to identify the CR fields that are to be updated by the mtcrf instruction.`,
  bits: [12, 19]
};

const d: field = {
  label: "d",
  description: `Immediate field specifying a signed two's complement integer that is sign-extended to 32 bits.`,
  bits: [[16, 31], [20, 31]]
};

const FM: field = {
  label: "FM",
  description: `This field mask is used to identify the FPSCR fields that are to be updated by the mtfsf instruction.`,
  bits: [7, 14]
};

const frA: field = {
  label: "frA",
  description: `This field is used to specify an FPR as a source.`,
  bits: [11, 15]
};

const frB: field = {
  label: "frB",
  description: `This field is used to specify an FPR as a source.`,
  bits: [16, 20]
};

const frC: field = {
  label: "frC",
  description: `This field is used to specify an FPR as a source.`,
  bits: [21, 25]
};

const frD: field = {
  label: "frD",
  description: `This field is used to specify an FPR as a destination.`,
  bits: [6, 10]
};

const frS: field = {
  label: "frS",
  description: `This field is used to specify an FPR as a source.`,
  bits: [6, 10]
};

const I: field = {
  label: "I",
  description: `This field is used to specify a GQR control register that is used by the paired single load or store
  instructions.`,
  bits: [[17, 19], [22, 24]]
};

const IMM: field = {
  label: "IMM",
  description: `Immediate field used as the data to be placed into a field in the FPSCR.`,
  bits: [16, 19]
};

const LI: field = {
  label: "LI",
  description: `Immediate field specifying a 24-bit signed two's complement integer that is concatenated on the
  right with 0b00 and sign-extended to 32 bits.`,
  bits: [6, 29]
};

const LK: field = {
  label: "LK",
  description: `Link bit.
  0 Does not update the link register (LR).
  1 Updates the LR. If the instruction is a branch instruction, the address of the instruction following
  the branch instruction is placed into the LR.`,
  bits: 31
};

const MB: field = {
  label: "MB",
  description: `These fields are used in rotate instructions to specify a 32-bit mask in the PowerPC
  Microprocessor Family: The Programming Environments manual.`,
  bits: [21, 25]
};

const ME: field = {
  label: "ME",
  description: `These fields are used in rotate instructions to specify a 32-bit mask in the PowerPC
  Microprocessor Family: The Programming Environments manual.`,
  bits: [26, 30]
};

const NB: field = {
  label: "NB",
  description: `This field is used to specify the number of bytes to move in an immediate string load or store.`,
  bits: [16, 20]
};

const OE: field = {
  label: "OE",
  description: `This field is used for extended arithmetic to enable setting OV and SO in the XER.`,
  bits: 21
};

const OPCD: field = {
  label: "OPCD",
  description: `Primary opcode field`,
  bits: [0, 5]
};

const rA: field = {
  label: "rA",
  description: `This field is used to specify a GPR to be used as a source or destination.`,
  bits: [11, 15]
};

const rB: field = {
  label: "rB",
  description: `This field is used to specify a GPR to be used as a source or destination.`,
  bits: [16, 20]
};

const Rc: field = {
  label: "Rc",
  description: `Record bit.
  0 Does not update the condition register (CR).
  1 Updates the CR to reflect the result of the operation.
  For integer instructions, CR bits 0–2 are set to reflect the result as a signed quantity and CR bit
  3 receives a copy of the summary overflow bit, XER[SO]. The result as an unsigned quantity or
  a bit string can be deduced from the EQ bit. For floating-point instructions, CR bits 4–7 are set
  to reflect floating-point exception, floating-point enabled exception, floating-point invalid
  operation exception, and floating-point overflow exception.
  (Note that exceptions are referred to as interrupts in the architecture specification.)`,
  bits: 31
};

const rD: field = {
  label: "rD",
  description: `This field is used to specify a GPR to be used as a destination.`,
  bits: [6, 10]
};

const rS: field = {
  label: "rS",
  description: `This field is used to specify a GPR to be used as a source.`,
  bits: [6, 10]
};

const SH: field = {
  label: "SH",
  description: `This field is used to specify a shift amount.`,
  bits: [16, 20]
};

const SIMM: field = {
  label: "SIMM",
  description: `This immediate field is used to specify a 16-bit signed integer.`,
  bits: [16, 31]
};

const SR: field = {
  label: "SR",
  description: `This field is used to specify one of the 16 segment registers.`,
  bits: [12, 15]
};

const TO: field = {
  label: "TO",
  description: `This field is used to specify the conditions on which to trap. The encoding is described in Section
  4.2.4.6, “Trap Instructions” iin the PowerPC Microprocessor Family: The Programming
  Environments manual.`,
  bits: [6, 10]
};

const UIMM: field = {
  label: "UIMM",
  description: `This immediate field is used to specify a 16-bit unsigned integer.`,
  bits: [16, 31]
};

const XO: field = {
  label: "XO",
  description: `Extended opcode field.`,
  bits: [[21, 30], [22, 30], [25, 30], [26, 30]]
};

const target_addr: field = {
  label: "target_addr",
  description: `the target address`,
  bits: [[6, 29], [16, 29]]
};

export const fields = { target_addr, spr, tbr, AA, BD, BI, BO, crbA, crbB, crbD, crfD, crfS, CRM, d, FM, frA, frB, frC, frD, frS, I, IMM, LI, LK, MB, ME, NB, OE, rA, rB, Rc, rD, rS, SH, SIMM, SR, TO, UIMM, XO };
//#endregion

//#region field alias implementations
const BA: fieldAlias = {
  label: "BA",
  equivalency: crbA
};
const BB: fieldAlias = {
  label: "BB",
  equivalency: crbB
};
const BT: fieldAlias = {
  label: "BT",
  equivalency: crbD
};
const BF: fieldAlias = {
  label: "BF",
  equivalency: crfD
};
const BFA: fieldAlias = {
  label: "BFA",
  equivalency: crfS
};
const D: fieldAlias = {
  label: "D",
  equivalency: d
};
// const DS: fieldAlias = {
//   label: "DS",
//   equivalency: ds
// }
const FLM: fieldAlias = {
  label: "FLM",
  equivalency: FM
};
const FRA: fieldAlias = {
  label: "FRA",
  equivalency: frA
};
const FRB: fieldAlias = {
  label: "FRB",
  equivalency: frB
};
const FRC: fieldAlias = {
  label: "FRC",
  equivalency: frC
};
const FRT: fieldAlias = {
  label: "FRT",
  equivalency: frD
};
const FRS: fieldAlias = {
  label: "FRS",
  equivalency: frS
};
const FXM: fieldAlias = {
  label: "FXM",
  equivalency: CRM
};
const RA: fieldAlias = {
  label: "RA",
  equivalency: rA
};
const RB: fieldAlias = {
  label: "RB",
  equivalency: rB
};
const RT: fieldAlias = {
  label: "RT",
  equivalency: rD
};
const RS: fieldAlias = {
  label: "RS",
  equivalency: rS
};
const SI: fieldAlias = {
  label: "SI",
  equivalency: SIMM
};
const U: fieldAlias = {
  label: "U",
  equivalency: IMM
};
const UI: fieldAlias = {
  label: "UI",
  equivalency: UIMM
};
export const aliases = { BA, BB, BT, BF, BFA, D, FLM, FRA, FRB, FRC, FRT, FRS, FXM, RA, RB, RT, RS, SI, U, UI };

//#endregion