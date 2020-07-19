import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-options',
  templateUrl: './note-options.component.html',
  styleUrls: ['./note-options.component.scss']
})
export class NoteOptionsComponent implements OnInit {

  @Output()
  public createNoteEvent: EventEmitter<boolean> = new EventEmitter();

  @Output()
  public deleteNoteEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public createNote() {
    this.createNoteEvent.emit(true);
  }

  public deleteNote() {
    this.deleteNoteEvent.emit(true);
  }

  public inputString(search: string) {
    console.log(search)
  }
}
