import { User } from '../../models/user';
import { DataService } from '../../providers/data.service';
import { Item } from '../../models/item';
import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.less']
})
export class CommentBoxComponent implements OnInit {

  @Input('item') item: Item;
  errorMessage: string;
  commentText: string;
  user: User;

  constructor(
    @Inject('DataService') public ds: DataService
  ) { }

  ngOnInit() {
    this.ds.getLoggedInUser().subscribe(u => this.user = u);
    console.log(this.user);
  }

  sendComment() {
    this.errorMessage = '';
    if (this.commentText) {
      this.ds.sendComment(this.commentText, this.item.id).subscribe(s => {
        console.log(s);
        if (!s.success) {
          this.errorMessage = s.errorMessage;
        }
      });
    } else {
      this.errorMessage = 'Comment can not be empty';
    }
  }

}
