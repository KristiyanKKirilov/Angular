import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';
import { SimpleUser } from '../types';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,  
})
export class UserListComponent implements OnChanges {
  @Input('usersProp') usersProp: SimpleUser[] = [];

  constructor(private cd: ChangeDetectorRef, private us: UserService) {}

  ngOnChanges(changes: SimpleChanges):void {
    console.log('changes', changes)
  }

  refreshList() {
    this.cd.detectChanges();
  }
}
