import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'try-md-draganddrop';

  numbers: number[] = [1, 22, 333, 4444, 55555];
  otherNumbers: number[] = [666666, 7777777, 88888888, 999999999];

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    } else {
      moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
    }
  }
}
