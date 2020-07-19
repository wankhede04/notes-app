export interface NotesDetailsStateModel {
  Notes: INotesDetails[];
}

export interface INotesDetails {
  noteID: string;
  noteDescription: string;
  updatedAt: Date;
}