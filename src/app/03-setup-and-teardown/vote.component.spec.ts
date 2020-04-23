import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component : VoteComponent;  //Arrange: Initialize the "system" under testing
  
  beforeEach(() => {
    component = new VoteComponent();  //Set up: Initialize or instantiate this component on each function
  });

  afterEach(() => {});  //tear down: Used for clean up

  // beforeAll(() => {}); //Execute once before all functions
  // afterAll(() => {}); //Execute once after all functions

  it('Should increment totalVotes when upvoted', () => {
    component.upVote();                   //Act
    expect(component.totalVotes).toBe(1); //Assert
  });

  it('Should decrement totalVotes when downvoted', () => {
    component.downVote();                   //Act
    expect(component.totalVotes).toBe(-1); //Assert
  });
});