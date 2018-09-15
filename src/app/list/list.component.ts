import { Component, OnInit } from '@angular/core';
import { Li } from '../li';
import { LiService } from '../li.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
lis: Li[];
  constructor(private liService: LiService) { }
getLis(): void{
this.liService.getLis()
    .subscribe(lis => this.lis = lis);
}

add(item: string): void {
  item = item.trim();
  if (!item) { return; }
  this.liService.addLi({ item } as Li)
    .subscribe(li => {
      this.lis.push(li);
    });
}

delete(li: Li): void {
  this.lis = this.lis.filter(h => h !== li);
  this.liService.deleteLi(li).subscribe();
}
  ngOnInit() {
this.getLis();
  }

}

