import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Notes } from '../store/notes/notes.actions';
import { INotesDetails } from '../store/notes/notes.model';
import { NoteDetailsState } from '../store/notes/notes.state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Select(NoteDetailsState.getNotes)
  public notes$: Observable<INotesDetails[]>;

  public searchNotes$: Observable<INotesDetails[]>;

  public selectedNoteID: string;
  public selectedNote: INotesDetails[];
  public searchedKeyword: string;
  public show: boolean = true;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  public createNote() {
    const note: INotesDetails = {
      noteID: uuidv4(),
      noteDescription: '',
      updatedAt: new Date()
    }
    this.store.dispatch(new Notes.Create(note));
    this.selectedNoteID = note.noteID;
  }

  public deleteNote() {
    this.store.dispatch(new Notes.Delete(this.selectedNoteID))
  }

  public getSelectedNote(noteID: string) {
    this.selectedNoteID = noteID;
  }

  public getNoteDescription(description: string) {
    let noteDetails: INotesDetails = {
      noteID: this.selectedNoteID,
      noteDescription: description,
      updatedAt: new Date()
    }
    this.store.dispatch(new Notes.Update(this.selectedNoteID, noteDetails));
  }

  public searchNotes(search: string) {
    this.searchedKeyword = search;
    this.searchNotes$ = this.store.select(NoteDetailsState.filter(search));
  }

  public toggleDropdown() {
    if (screen.width <= 767) {
      this.show = !this.show;
    }
  }
}
