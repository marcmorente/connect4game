import { type PlayController } from './PlayController'
import { type ResumeController } from './ResumeController'
import { type StartController } from './StartController'

export interface ControllerVisitor {
  visitStartController: (startController: StartController) => void
  visitPlayController: (playController: PlayController) => void
  visitResumeController: (resumeController: ResumeController) => void
}
