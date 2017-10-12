import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Note } from '../../api';

@Component({
  selector: 'awr-note-quick-add',
  templateUrl: './note-quick-add.component.html',
  styleUrls: ['./note-quick-add.component.scss']
})

export class NoteQuickAdd implements OnInit {
  quickAddForm: FormGroup;

  @Output() create = new EventEmitter<Note>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.quickAddForm = this.prepareQuickAddForm();
  }

  prepareQuickAddForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required]
    });
  }

  propagateNote() {
    const note = new Note();
    note.title = this.quickAddForm.controls.title.value;
    note.text = this.quickAddForm.controls.text.value;

    this.create.emit(note);
    this.quickAddForm.reset();
  }
}
