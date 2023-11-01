import { type Session } from '../models/Session'
import { ResumeView } from '../views/ResumeView'
import { Controller } from './Controller'

export class ResumeController extends Controller {
  private readonly resumeView: ResumeView

  constructor (session: Session) {
    super(session)
    this.resumeView = new ResumeView(this.session)
  }

  async control (): Promise<void> {
    const resume = await this.resumeView.resume()
    if (resume) {
      this.session.reset()
    }
  }
}
