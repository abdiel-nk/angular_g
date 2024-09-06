import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CommonModule, NgIf } from '@angular/common';
import { DashboardComponent } from './dashboard/component/dashboard.component';

interface arrayItem{
  id:number;
  name:string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf,RouterOutlet, TestComponent,DashboardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Angular0';
  condition = true;
  selectedOption = 'tres';
  options = ['uno','dos','tres'];
  array=[
    {id:1,name: 'item1' },
    {id:2,name: 'item2' },

  ];
  trackByFn(item: any){
    return item.id
  }
  message='from app component'
  handleClick(){
    this.message = 'clicked at the app component';
  }
}
