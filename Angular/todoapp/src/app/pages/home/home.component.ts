import { AbstractControl, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { task } from '../../pages/models/task.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<task[]>([
    {
      id: Date.now(),
      title: 'Crear Proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear Componentes',
      completed: false
    }

  ]);




  /*changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
  }*/

  addTask(title: string){
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);//agrego un nuevo estado
  }

  /**
   *
   * @param index recibe el index del elemento a eliminar
   */
  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task, position)=>position !== index));
  }


  updateTask(index: number){
    this.tasks.update((tasks) => {
      return tasks.map((task, position) =>{
        if(position === index){
          return {
            ...task,
            completed: !task.completed

          }
        }
        return task;
      })
    })
  }

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,

    ],

  });

  changeHandler(){
    if (this.newTaskCtrl.valid) {
      const value = this.newTaskCtrl.value.trim();
      if(value !== ''){
       //console.log('El valor' + value);
        this.addTask(value);
        this.newTaskCtrl.setValue('');
      }
    }
  }

  espacioBlanco(control: AbstractControl){

  }

}
