import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';
import { SimpleUser } from '../types';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input('usersProp') usersProp: SimpleUser[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges):void {
    console.log('changes', changes)
  }

  refreshList() {
    this.cd.detectChanges();
  }
}
