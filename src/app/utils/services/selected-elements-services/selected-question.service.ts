import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class SelectedQuestionService {

  private ids = new Array<string>();

  // used in list-of-questions
  pushIDs(id: string) {
    this.ids.push(id);
  }

  // used in new-test-form
  getIDs(): Array<string> {
    return this.ids;
  }
}
