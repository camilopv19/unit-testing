import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, empty, throwError } from 'rxjs';
/** 
 * from: Return an Observable from an Array
 * empty: Return an empty Observable
 * throwError: Return an error $ with the specified message (string)
*/

//To skip a test add an 'x' at the beginning: xdescribe (for the whole suite) and xit (for a single test)
describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);          //Cheat with the 'null': the constructor parameter HttpClient requires additional params
    component = new TodosComponent(service);
  });

  it('Should set todos property with the items returned from the server', () => {
    let todos = [1, 2, 3];
    // spyOn: Controls a method in a class, allows to modify implementation, variables and errors
    // callFake: Changes the implementation of a method, in this case: getTodos
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([todos]); //The fake implementation is completed with an Observable that returns objects
    });

    component.ngOnInit();

    // expect(component.todos.length).toBeGreaterThan(0);  //Version 1
    expect(component.todos).toEqual(todos);                 //Version 2: More specific
  });

  /** INTERACTIONS  -- add method in service*/
  it('Should call the server to save the changes when a new todo item is added', () => {
    let spy = spyOn(service, 'add').and.callFake(() => {
      return empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('Should add new todo returned from the server', () => {
    let todo = { id: 1 };
    let spy = spyOn(service, 'add').and.returnValue(from([todo]));  //Replacement of the arrow -and the callFake() functions

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('Should set the message property if server returns an error when adding a new todo', () => {
    let error = 'Error from the server'
    let spy = spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);
  });

  /** INTERACTIONS  -- delete method in service*/
  it('Should call the server to delete a todo item when user confirms', () => {
    
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(empty());

    let id = 1;
    component.delete(id);

    expect(spy).toHaveBeenCalledWith(id); //ATTENTION to the 'With' in order to be more specific in the assertion
  });
  it('Should NOT call the server to delete a todo item when user cancels', () => {
    
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(empty());

    let id = 1;
    component.delete(id);

    expect(spy).not.toHaveBeenCalled();  //The general assertion is more specific just with the ToHaveBeenCalled
  });
});