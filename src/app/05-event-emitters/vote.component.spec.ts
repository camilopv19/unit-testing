import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('Should raise voteChanged event when upvoted', () => {
    //Arrange
    let totalVotes = null;
    component.voteChanged.subscribe((_totalVotes) => totalVotes = _totalVotes);

    //Act
    component.upVote();

    //Assert
    expect(totalVotes).toBe(1);          //Solid solution: Avoids bugs in the component
    // expect(totalVotes).not.toBe(null);   //version 1: Component may have bugs
    // expect(totalVotes).not.toBeNull();   //version 2: Component may have bugs
  });
});