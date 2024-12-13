import { Component , AfterViewInit } from '@angular/core';
import { TableService } from '../table.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
tableData: any;
editBoolean:boolean=false
constructor(private tableService:TableService, private router: Router){}

ngOnInit(){
}
ngAfterViewInit(){
  setTimeout(()=>{ 
      this.tableData =  this.tableService.updateTableData()
      console.log(this.tableData,'8787')
  },1000)
}
delete(i:any){
console.log(i,'00')
// this.tableData =this.tableData.filter((val:any,index:any) => index !== i);
this.tableData.splice(i,1)
}
edit(i:any,item:any){
  console.log(i,'00',item)
  this.tableService.setData(item,i,this.editBoolean)
  this.router.navigate(['/form']);
  }
}
