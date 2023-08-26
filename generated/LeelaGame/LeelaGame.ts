// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CommentAction extends ethereum.Event {
  get params(): CommentAction__Params {
    return new CommentAction__Params(this);
  }
}

export class CommentAction__Params {
  _event: CommentAction;

  constructor(event: CommentAction) {
    this._event = event;
  }

  get commentId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get reportId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get actor(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get content(): string {
    return this._event.parameters[3].value.toString();
  }

  get timestamp(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get action(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class DiceRolled extends ethereum.Event {
  get params(): DiceRolled__Params {
    return new DiceRolled__Params(this);
  }
}

export class DiceRolled__Params {
  _event: DiceRolled;

  constructor(event: DiceRolled) {
    this._event = event;
  }

  get roller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get rolled(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get currentPlan(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ReportAction extends ethereum.Event {
  get params(): ReportAction__Params {
    return new ReportAction__Params(this);
  }
}

export class ReportAction__Params {
  _event: ReportAction;

  constructor(event: ReportAction) {
    this._event = event;
  }

  get reportId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get actor(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get content(): string {
    return this._event.parameters[2].value.toString();
  }

  get plan(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get action(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class LeelaGame__checkGameStatusResult {
  value0: boolean;
  value1: boolean;

  constructor(value0: boolean, value1: boolean) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    return map;
  }

  getIsStart(): boolean {
    return this.value0;
  }

  getIsFinished(): boolean {
    return this.value1;
  }
}

export class LeelaGame__commentsResult {
  value0: BigInt;
  value1: BigInt;
  value2: Address;
  value3: string;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: Address,
    value3: string,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getCommentId(): BigInt {
    return this.value0;
  }

  getReportId(): BigInt {
    return this.value1;
  }

  getCommenter(): Address {
    return this.value2;
  }

  getContent(): string {
    return this.value3;
  }

  getTimestamp(): BigInt {
    return this.value4;
  }
}

export class LeelaGame__getAllCommentsForReportResultValue0Struct extends ethereum.Tuple {
  get commentId(): BigInt {
    return this[0].toBigInt();
  }

  get reportId(): BigInt {
    return this[1].toBigInt();
  }

  get commenter(): Address {
    return this[2].toAddress();
  }

  get content(): string {
    return this[3].toString();
  }

  get timestamp(): BigInt {
    return this[4].toBigInt();
  }
}

export class LeelaGame__getAllReportsResultValue0Struct extends ethereum.Tuple {
  get reportId(): BigInt {
    return this[0].toBigInt();
  }

  get reporter(): Address {
    return this[1].toAddress();
  }

  get content(): string {
    return this[2].toString();
  }

  get plan(): BigInt {
    return this[3].toBigInt();
  }

  get timestamp(): BigInt {
    return this[4].toBigInt();
  }

  get commentIds(): Array<BigInt> {
    return this[5].toBigIntArray();
  }
}

export class LeelaGame__getReportResultValue0Struct extends ethereum.Tuple {
  get reportId(): BigInt {
    return this[0].toBigInt();
  }

  get reporter(): Address {
    return this[1].toAddress();
  }

  get content(): string {
    return this[2].toString();
  }

  get plan(): BigInt {
    return this[3].toBigInt();
  }

  get timestamp(): BigInt {
    return this[4].toBigInt();
  }

  get commentIds(): Array<BigInt> {
    return this[5].toBigIntArray();
  }
}

export class LeelaGame__playersResult {
  value0: BigInt;
  value1: BigInt;
  value2: boolean;
  value3: boolean;
  value4: i32;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: boolean,
    value3: boolean,
    value4: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    map.set(
      "value4",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value4))
    );
    return map;
  }

  getPlan(): BigInt {
    return this.value0;
  }

  getPreviousPlan(): BigInt {
    return this.value1;
  }

  getIsStart(): boolean {
    return this.value2;
  }

  getIsFinished(): boolean {
    return this.value3;
  }

  getConsecutiveSixes(): i32 {
    return this.value4;
  }
}

export class LeelaGame__reportsResult {
  value0: BigInt;
  value1: Address;
  value2: string;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: string,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getReportId(): BigInt {
    return this.value0;
  }

  getReporter(): Address {
    return this.value1;
  }

  getContent(): string {
    return this.value2;
  }

  getPlan(): BigInt {
    return this.value3;
  }

  getTimestamp(): BigInt {
    return this.value4;
  }
}

export class LeelaGame extends ethereum.SmartContract {
  static bind(address: Address): LeelaGame {
    return new LeelaGame("LeelaGame", address);
  }

  checkGameStatus(playerAddress: Address): LeelaGame__checkGameStatusResult {
    let result = super.call(
      "checkGameStatus",
      "checkGameStatus(address):(bool,bool)",
      [ethereum.Value.fromAddress(playerAddress)]
    );

    return new LeelaGame__checkGameStatusResult(
      result[0].toBoolean(),
      result[1].toBoolean()
    );
  }

  try_checkGameStatus(
    playerAddress: Address
  ): ethereum.CallResult<LeelaGame__checkGameStatusResult> {
    let result = super.tryCall(
      "checkGameStatus",
      "checkGameStatus(address):(bool,bool)",
      [ethereum.Value.fromAddress(playerAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LeelaGame__checkGameStatusResult(
        value[0].toBoolean(),
        value[1].toBoolean()
      )
    );
  }

  comments(param0: BigInt): LeelaGame__commentsResult {
    let result = super.call(
      "comments",
      "comments(uint256):(uint256,uint256,address,string,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new LeelaGame__commentsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toString(),
      result[4].toBigInt()
    );
  }

  try_comments(param0: BigInt): ethereum.CallResult<LeelaGame__commentsResult> {
    let result = super.tryCall(
      "comments",
      "comments(uint256):(uint256,uint256,address,string,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LeelaGame__commentsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toString(),
        value[4].toBigInt()
      )
    );
  }

  getAllCommentsForReport(
    reportId: BigInt
  ): Array<LeelaGame__getAllCommentsForReportResultValue0Struct> {
    let result = super.call(
      "getAllCommentsForReport",
      "getAllCommentsForReport(uint256):((uint256,uint256,address,string,uint256)[])",
      [ethereum.Value.fromUnsignedBigInt(reportId)]
    );

    return result[0].toTupleArray<
      LeelaGame__getAllCommentsForReportResultValue0Struct
    >();
  }

  try_getAllCommentsForReport(
    reportId: BigInt
  ): ethereum.CallResult<
    Array<LeelaGame__getAllCommentsForReportResultValue0Struct>
  > {
    let result = super.tryCall(
      "getAllCommentsForReport",
      "getAllCommentsForReport(uint256):((uint256,uint256,address,string,uint256)[])",
      [ethereum.Value.fromUnsignedBigInt(reportId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        LeelaGame__getAllCommentsForReportResultValue0Struct
      >()
    );
  }

  getAllReports(): Array<LeelaGame__getAllReportsResultValue0Struct> {
    let result = super.call(
      "getAllReports",
      "getAllReports():((uint256,address,string,uint256,uint256,uint256[])[])",
      []
    );

    return result[0].toTupleArray<LeelaGame__getAllReportsResultValue0Struct>();
  }

  try_getAllReports(): ethereum.CallResult<
    Array<LeelaGame__getAllReportsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getAllReports",
      "getAllReports():((uint256,address,string,uint256,uint256,uint256[])[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<LeelaGame__getAllReportsResultValue0Struct>()
    );
  }

  getPlanHistory(player: Address): Array<BigInt> {
    let result = super.call(
      "getPlanHistory",
      "getPlanHistory(address):(uint256[])",
      [ethereum.Value.fromAddress(player)]
    );

    return result[0].toBigIntArray();
  }

  try_getPlanHistory(player: Address): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getPlanHistory",
      "getPlanHistory(address):(uint256[])",
      [ethereum.Value.fromAddress(player)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getReport(reportId: BigInt): LeelaGame__getReportResultValue0Struct {
    let result = super.call(
      "getReport",
      "getReport(uint256):((uint256,address,string,uint256,uint256,uint256[]))",
      [ethereum.Value.fromUnsignedBigInt(reportId)]
    );

    return changetype<LeelaGame__getReportResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getReport(
    reportId: BigInt
  ): ethereum.CallResult<LeelaGame__getReportResultValue0Struct> {
    let result = super.tryCall(
      "getReport",
      "getReport(uint256):((uint256,address,string,uint256,uint256,uint256[]))",
      [ethereum.Value.fromUnsignedBigInt(reportId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<LeelaGame__getReportResultValue0Struct>(value[0].toTuple())
    );
  }

  getRollHistory(player: Address): Array<i32> {
    let result = super.call(
      "getRollHistory",
      "getRollHistory(address):(uint8[])",
      [ethereum.Value.fromAddress(player)]
    );

    return result[0].toI32Array();
  }

  try_getRollHistory(player: Address): ethereum.CallResult<Array<i32>> {
    let result = super.tryCall(
      "getRollHistory",
      "getRollHistory(address):(uint8[])",
      [ethereum.Value.fromAddress(player)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32Array());
  }

  playerPlans(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "playerPlans",
      "playerPlans(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_playerPlans(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "playerPlans",
      "playerPlans(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  playerReportCreated(param0: Address): boolean {
    let result = super.call(
      "playerReportCreated",
      "playerReportCreated(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_playerReportCreated(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "playerReportCreated",
      "playerReportCreated(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  playerRolls(param0: Address, param1: BigInt): i32 {
    let result = super.call(
      "playerRolls",
      "playerRolls(address,uint256):(uint8)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toI32();
  }

  try_playerRolls(param0: Address, param1: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "playerRolls",
      "playerRolls(address,uint256):(uint8)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  players(param0: Address): LeelaGame__playersResult {
    let result = super.call(
      "players",
      "players(address):(uint256,uint256,bool,bool,uint8)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new LeelaGame__playersResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBoolean(),
      result[3].toBoolean(),
      result[4].toI32()
    );
  }

  try_players(param0: Address): ethereum.CallResult<LeelaGame__playersResult> {
    let result = super.tryCall(
      "players",
      "players(address):(uint256,uint256,bool,bool,uint8)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LeelaGame__playersResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBoolean(),
        value[3].toBoolean(),
        value[4].toI32()
      )
    );
  }

  reports(param0: BigInt): LeelaGame__reportsResult {
    let result = super.call(
      "reports",
      "reports(uint256):(uint256,address,string,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new LeelaGame__reportsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_reports(param0: BigInt): ethereum.CallResult<LeelaGame__reportsResult> {
    let result = super.tryCall(
      "reports",
      "reports(uint256):(uint256,address,string,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LeelaGame__reportsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddCommentCall extends ethereum.Call {
  get inputs(): AddCommentCall__Inputs {
    return new AddCommentCall__Inputs(this);
  }

  get outputs(): AddCommentCall__Outputs {
    return new AddCommentCall__Outputs(this);
  }
}

export class AddCommentCall__Inputs {
  _call: AddCommentCall;

  constructor(call: AddCommentCall) {
    this._call = call;
  }

  get reportId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get content(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class AddCommentCall__Outputs {
  _call: AddCommentCall;

  constructor(call: AddCommentCall) {
    this._call = call;
  }
}

export class CreateReportCall extends ethereum.Call {
  get inputs(): CreateReportCall__Inputs {
    return new CreateReportCall__Inputs(this);
  }

  get outputs(): CreateReportCall__Outputs {
    return new CreateReportCall__Outputs(this);
  }
}

export class CreateReportCall__Inputs {
  _call: CreateReportCall;

  constructor(call: CreateReportCall) {
    this._call = call;
  }

  get content(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class CreateReportCall__Outputs {
  _call: CreateReportCall;

  constructor(call: CreateReportCall) {
    this._call = call;
  }
}

export class DeleteCommentCall extends ethereum.Call {
  get inputs(): DeleteCommentCall__Inputs {
    return new DeleteCommentCall__Inputs(this);
  }

  get outputs(): DeleteCommentCall__Outputs {
    return new DeleteCommentCall__Outputs(this);
  }
}

export class DeleteCommentCall__Inputs {
  _call: DeleteCommentCall;

  constructor(call: DeleteCommentCall) {
    this._call = call;
  }

  get commentId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DeleteCommentCall__Outputs {
  _call: DeleteCommentCall;

  constructor(call: DeleteCommentCall) {
    this._call = call;
  }
}

export class DeleteReportCall extends ethereum.Call {
  get inputs(): DeleteReportCall__Inputs {
    return new DeleteReportCall__Inputs(this);
  }

  get outputs(): DeleteReportCall__Outputs {
    return new DeleteReportCall__Outputs(this);
  }
}

export class DeleteReportCall__Inputs {
  _call: DeleteReportCall;

  constructor(call: DeleteReportCall) {
    this._call = call;
  }

  get reportId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DeleteReportCall__Outputs {
  _call: DeleteReportCall;

  constructor(call: DeleteReportCall) {
    this._call = call;
  }
}

export class RollDiceCall extends ethereum.Call {
  get inputs(): RollDiceCall__Inputs {
    return new RollDiceCall__Inputs(this);
  }

  get outputs(): RollDiceCall__Outputs {
    return new RollDiceCall__Outputs(this);
  }
}

export class RollDiceCall__Inputs {
  _call: RollDiceCall;

  constructor(call: RollDiceCall) {
    this._call = call;
  }
}

export class RollDiceCall__Outputs {
  _call: RollDiceCall;

  constructor(call: RollDiceCall) {
    this._call = call;
  }
}

export class UpdateCommentContentCall extends ethereum.Call {
  get inputs(): UpdateCommentContentCall__Inputs {
    return new UpdateCommentContentCall__Inputs(this);
  }

  get outputs(): UpdateCommentContentCall__Outputs {
    return new UpdateCommentContentCall__Outputs(this);
  }
}

export class UpdateCommentContentCall__Inputs {
  _call: UpdateCommentContentCall;

  constructor(call: UpdateCommentContentCall) {
    this._call = call;
  }

  get commentId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newContent(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class UpdateCommentContentCall__Outputs {
  _call: UpdateCommentContentCall;

  constructor(call: UpdateCommentContentCall) {
    this._call = call;
  }
}

export class UpdateReportContentCall extends ethereum.Call {
  get inputs(): UpdateReportContentCall__Inputs {
    return new UpdateReportContentCall__Inputs(this);
  }

  get outputs(): UpdateReportContentCall__Outputs {
    return new UpdateReportContentCall__Outputs(this);
  }
}

export class UpdateReportContentCall__Inputs {
  _call: UpdateReportContentCall;

  constructor(call: UpdateReportContentCall) {
    this._call = call;
  }

  get reportId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newContent(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class UpdateReportContentCall__Outputs {
  _call: UpdateReportContentCall;

  constructor(call: UpdateReportContentCall) {
    this._call = call;
  }
}
