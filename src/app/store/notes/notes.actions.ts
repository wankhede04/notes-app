import { INotesDetails } from './notes.model';

export namespace Notes {
  export class Get {
    static readonly type = '[Note] Get Notes';
  }

  export class Create {
    static readonly type = '[Note] Create Note';
    constructor(public noteDetails: INotesDetails) {}
  }

  export class Update {
    static readonly type = '[Note] Update Note';
    constructor(public noteID: string, public noteDetails: INotesDetails) {}
  }

  export class Delete {
    static readonly type = '[Note] Delete Note';
    constructor(public noteID: string) {}
  }
}