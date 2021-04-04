import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {

  Data : any;
  newData  = new Array();
  show = true;
  
  
  public buttonName:any 

  constructor(private getdata : ApiService) { 

    this.getdata.getrecords().subscribe(data =>{
      // console.log(data);
      this.Data = data;
    
      })
  }

  ngOnInit(): void {

  }
  
  compare(index: any){

    this.newData.push(this.Data[index]);
    this.Data[index].compare = true;

  }

  remove(d:any , i :number ){

    console.log(d.id);
    // this.newData.splice(this.Data[index],1);
    let index = this.newData.findIndex(
     x =>x.id == d.id

    );
  

    this.newData.splice(index, 1);
    this.Data[i].compare = false;
    console.log(this.Data[i]);


  }

}
