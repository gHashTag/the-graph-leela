import {
  CommentAction as CommentActionEvent,
  DiceRolled as DiceRolledEvent,
  ReportAction as ReportActionEvent,
} from '../generated/LeelaGame/LeelaGame'
import { CommentAction, DiceRolled, ReportAction } from '../generated/schema'

export function handleCommentAction(event: CommentActionEvent): void {
  let entity = new CommentAction(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.commentId = event.params.commentId
  entity.reportId = event.params.reportId
  entity.actor = event.params.actor
  entity.content = event.params.content
  entity.timestamp = event.params.timestamp
  entity.action = event.params.action

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDiceRolled(event: DiceRolledEvent): void {
  let entity = new DiceRolled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.roller = event.params.roller
  entity.rolled = event.params.rolled
  entity.currentPlan = event.params.currentPlan

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReportAction(event: ReportActionEvent): void {
  let entity = new ReportAction(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.reportId = event.params.reportId
  entity.actor = event.params.actor
  entity.content = event.params.content
  entity.plan = event.params.plan
  entity.timestamp = event.params.timestamp
  entity.action = event.params.action

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
