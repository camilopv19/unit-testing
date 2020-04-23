
import { EventEmitter } from '@angular/core'; 

export class VoteComponent { 
  totalVotes = 0; 
  voteChanged = new EventEmitter(); //Normally used with the @Output deco. in templates

  upVote() { 
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }
}