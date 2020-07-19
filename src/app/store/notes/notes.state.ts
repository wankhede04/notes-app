import { State, StateContext, Selector, Action, createSelector } from '@ngxs/store';
import { INotesDetails, NotesDetailsStateModel } from './notes.model';
import { Notes } from './notes.actions';

const INITIAL_STATE_DETAILS: NotesDetailsStateModel = {
  Notes: []
};

@State<NotesDetailsStateModel>({
  name: 'notes',
  defaults: INITIAL_STATE_DETAILS
})
export class NoteDetailsState {
  constructor() {}

  public static filter(search: string) {
    return createSelector([NoteDetailsState], (state: NotesDetailsStateModel) => {
      return state.Notes.filter(note => note.noteDescription.includes(search))
    });
  }

  @Selector()
  public static getNotes(state: NotesDetailsStateModel) {
    return state.Notes;
  }

  @Action(Notes.Get)
  public getNoteList(ctx: StateContext<NotesDetailsStateModel>, action: Notes.Get) {
    const state = ctx.getState();

    return ctx.setState({
      ...state
    });
  }

  @Action(Notes.Create)
  public createNote(ctx: StateContext<NotesDetailsStateModel>, action: Notes.Create) {
    const state = ctx.getState();

    return ctx.patchState({
      Notes: [...state.Notes, action.noteDetails]
    });
  }

  @Action(Notes.Update)
  public updateNote(ctx: StateContext<NotesDetailsStateModel>, action: Notes.Update) {
    let state = ctx.getState();

    const noteList = [ ...state.Notes ];
    const noteIndex = noteList.findIndex(note => note.noteID === action.noteID);
    noteList[noteIndex] = action.noteDetails;

    return ctx.setState({
      ...state,
      Notes: noteList
    });
  }

  @Action(Notes.Delete)
  public deleteNote(ctx: StateContext<NotesDetailsStateModel>, action: Notes.Delete) {
    let state = ctx.getState();

    const filteredArray = state.Notes.filter(note => note.noteID !== action.noteID);

    return ctx.setState({
      ...state,
      Notes: filteredArray
    });
  }
}
