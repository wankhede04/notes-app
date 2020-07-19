import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { INotesDetails } from '../store/notes/notes.model';

@Component({
  selector: 'app-note-metadata',
  templateUrl: './note-metadata.component.html',
  styleUrls: ['./note-metadata.component.scss']
})
export class NoteMetadataComponent implements OnInit {

  @Input()
  public notes: INotesDetails;

  @Output()
  public selectedNoteEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public openNote() {
    this.selectedNoteEvent.emit(this.notes.noteID);
  }

}
