import { Component, OnInit, Output, EventEmitter, Input, SimpleChange } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isEmpty } from 'lodash';
import { INotesDetails } from '../store/notes/notes.model';

@Component({
  selector: 'app-note-board',
  templateUrl: './note-board.component.html',
  styleUrls: ['./note-board.component.scss']
})
export class NoteBoardComponent implements OnInit {

  @Output()
  public noteDetailsEvent: EventEmitter<string> = new EventEmitter();

  @Input()
  public allNotes: INotesDetails[];

  @Input()
  public currentNoteID: string;

  public currentDateTime: Date = new Date();
  private _textareaValue: BehaviorSubject<string> = new BehaviorSubject('');

  public get textareaValue(): string {
    return this._textareaValue.getValue();
  }

  public set textareaValue(inputValue: string) {
    this._textareaValue.next(inputValue);
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChange) {
    let currentNote = this.allNotes.filter(note => note.noteID === this.currentNoteID);
    this.textareaValue = isEmpty(currentNote) ? '' : currentNote[0].noteDescription;
  }

  public noteValue() {
    this.noteDetailsEvent.emit(this.textareaValue)
  }

}
