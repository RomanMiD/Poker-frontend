import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Story } from '../../common/interfaces/story';

@Component({
  selector: 'app-story-edit',
  templateUrl: './story-edit.component.html',
  styleUrls: ['./story-edit.component.scss']
})
export class StoryEditComponent implements OnInit {
  @Input()
  control: FormControl;
  value: Story = {position: null, title: null, body: null};

  constructor() {
  }

  onChange(): void {
    this.control.setValue(this.value);
  }

  ngOnInit(): void {
  }

}
