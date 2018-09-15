import { Component, OnInit } from '@angular/core';
import { Li } from '../li';
import { LiService } from'../li.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
public isCompleted: boolean = false;
  li:Li;
  constructor(
private liService : LiService,
private location: Location,
private activatedRoute : ActivatedRoute
) { }

  ngOnInit(): void { 
this.getLi();
  }
getLi():void
{
const id= +this.activatedRoute.snapshot.paramMap.get('id');
this.liService.getLi(id)
    .subscribe(li =>this.li=li);
}
goBack(): void
{
this.location.back();
}
save(): void {
   this.liService.updateLi(this.li)
     .subscribe(() => this.goBack());
 }

}




