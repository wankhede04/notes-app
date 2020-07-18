import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-options',
  templateUrl: './note-options.component.html',
  styleUrls: ['./note-options.component.scss']
})
export class NoteOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public inputString(search: string) {
    console.log(search)
  }
}
