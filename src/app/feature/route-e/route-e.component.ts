import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-route-e',
  templateUrl: './route-e.component.html',
  styleUrls: ['./route-e.component.css']
})
export class RouteEComponent implements OnInit {

 private subscribedData!: Subscription;
 public keys!: any[];
 private studentMarks: any[] = [];
 private selectedKey: string = '';
 private clickCount: number = 1;
 public sortedStudentMarksArray!: any[];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.subscribedData = this.sharedService.getData().subscribe((res:any) => {
      this.studentMarks = JSON.parse(JSON.stringify(res));
      this.sortedStudentMarksArray = this.studentMarks;
      this.keys = Object.keys(this.studentMarks[0]);
    });
  }

  ngOnDestroy(): void {
    this.subscribedData.unsubscribe();
  }

 public sortUsingColumn(key: string): void {
   
    if (this.selectedKey !== key) {
      this.clickCount=1;
      this.selectedKey = key;
      this.sortedStudentMarksArray = this.sortBySpecificKey(this.studentMarks, key);
      this.clickCount++;
      return
    }else{
      if (this.clickCount === 1) {
        this.sortedStudentMarksArray = this.sortBySpecificKey(this.studentMarks, key);
        this.clickCount++;
       return
      }
       if (this.clickCount === 2) {
        this.sortedStudentMarksArray = this.reverseBySpecificKey(this.studentMarks, key);
        this.clickCount++;
        return
      }
      else if (this.clickCount === 3) {
        this.sortedStudentMarksArray = this.studentMarks;
        this.clickCount = 1;
        return
      }
    }

  
  }

 private sortBySpecificKey = function (arr: any, p: any) {
    return arr.slice(0).sort(function (a: any, b: any) {
      return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
    });
  }

 private reverseBySpecificKey = function (arr: any, p: any) {
    return arr.slice(0).sort(function (a: any, b: any) {
      return (a[p] > b[p]) ? -1 : (a[p] < b[p]) ? 1 : 0;
    });
  }
}
