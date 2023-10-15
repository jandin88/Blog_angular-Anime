import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {dataFake} from "../data/dataFake"

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  photoCover:String=''
  contentTitle:String=''
  contentDescription:String=''
  private id:String | null="0"

  constructor(private route:ActivatedRoute) {}

  ngOnInit():void{
    this.route.paramMap.subscribe(value =>
                                         this.id=value.get("id")
    )
    this.setValuesComponent(this.id)
  }

  setValuesComponent(id:String|null){
    const result=dataFake.filter(articles=> articles.id==id)[0]

    console.log(result)
    this.contentTitle=result.title;
    this.contentDescription=result.description
    this.photoCover=result.photoCover
  }
}
