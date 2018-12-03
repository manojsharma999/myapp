import { Component, OnInit } from '@angular/core';
import { MyserService } from '../myser.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
data;
fData;
  constructor(private ser:MyserService) { }

  ngOnInit() {

  this.ser.getNewsData()
  .subscribe(res=>{
    this.data=res;
    console.log(res);
    this.fData=this.data.articles;

  })
  

  }

}
