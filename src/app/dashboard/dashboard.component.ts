import { Component, OnInit, Input } from '@angular/core';
import { ToDoService } from '../services/to-do.service';
import { map } from 'rxjs/operators';
import { Task } from './task';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public toDoArray: any [] = [];
  public toggleDiv = false;
  public changedLabel: string;
  public toDoArray1: Observable<any>;
  model: any;
  public label: string;
  titleLable = false;
  @Input() userName: string;
  constructor(public toDoService: ToDoService) {
    this.toDoArray1 = this.toDoService.getToDOList(this.userName)
    .snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val() })
          )
      )
   );
    console.log('cjsdkj' + this.toDoArray1);
}
  addTask(lable1) {
    console.log('In addTask');
    console.log(lable1);

    if (lable1 === null) {
      this.titleLable = true;
      console.log('hi' + this.titleLable);
      return;
    }
    this.model = {
      task: lable1,
      isChecked: false,
      userName: this.userName
    };
    console.log('if not execu' + this.titleLable);
    this.titleLable = false;
    this.toDoService.addToDoList(this.model);
    this.label = null;
  }
  onDelete(key) {
    console.log(key);
    this.toDoService.deleteTask(key);
  }
  // onUpdate(id) {
  //   this.onUpdate()
  // }
  toggleFunction() {
    this.toggleDiv = true;
  }
  ngOnInit() {
  }
}
