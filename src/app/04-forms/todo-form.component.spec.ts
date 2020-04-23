import { TodoFormComponent } from './todo-form.component'; 
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder); //According to the constructor
  });

  //First test: Create 2 form controls --> Look by their names
  it('Should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBe(true);
  });

  it('Should make the name control required', () => {
    //Act
    let control = component.form.get('name');
    control.setValue('');   //Simulating the empty field

    //Assert
    expect(control.valid).toBeFalsy();
  });
});