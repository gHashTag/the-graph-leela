import { BigInt, Address } from '@graphprotocol/graph-ts'
import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
} from 'matchstick-as/assembly/index'

import { createCommentActionEvent } from './leela-game-utils'

import { CommentAction as CommentActionEvent } from '../generated/LeelaGame/LeelaGame'
import { CommentAction } from '../generated/schema'
import { handleCommentAction } from '../src/leela-game'

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe('Describe entity assertions', () => {
  beforeAll(() => {
    let commentId = BigInt.fromI32(234)
    let reportId = BigInt.fromI32(234)
    let actor = Address.fromString('0x0000000000000000000000000000000000000001')
    let content = 'Example string value'
    let timestamp = BigInt.fromI32(234)
    let action = 123
    let newCommentActionEvent = createCommentActionEvent(
      commentId,
      reportId,
      actor,
      content,
      timestamp,
      action,
    )
    handleCommentAction(newCommentActionEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test('CommentAction created and stored', () => {
    assert.entityCount('CommentAction', 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      'CommentAction',
      '0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1',
      'commentId',
      '234',
    )
    assert.fieldEquals(
      'CommentAction',
      '0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1',
      'reportId',
      '234',
    )
    assert.fieldEquals(
      'CommentAction',
      '0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1',
      'actor',
      '0x0000000000000000000000000000000000000001',
    )
    assert.fieldEquals(
      'CommentAction',
      '0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1',
      'content',
      'Example string value',
    )
    assert.fieldEquals(
      'CommentAction',
      '0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1',
      'timestamp',
      '234',
    )
    assert.fieldEquals(
      'CommentAction',
      '0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1',
      'action',
      '123',
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
