import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = ['Instalar Angular CLI', 'Crear Proyectos', 'Crear Componentes'];
  name = 'Jesus';
  edad = 40;
  disable = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  persona = {
    name: 'Jesus',
    age: 40,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  };

  clickHanlder() {
    alert('Hola');
  }

  changeHandler(event: Event){
    console.log(event);
  }

  keydownHanlder(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);

  }


  //signals
  name1 =signal('Jesus');
  edad1 = signal(40);
  //disable = true;
  img2 = signal('https://w3schools.com/howto/img_avatar.png');


  changeHandlerSignal(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name1.set(newValue);
  }

  tasks2 = signal(['Instalar Angular CLI', 'Crear Proyectos', 'Crear Componentes', 'Crear Servicio']);


  persona1 = signal(
    {
      name1: 'Jesus',
      edad1: 15,
      avatar: 'https://w3schools.com/howto/img_avatar.png',
    }


);

changNameSignal(event: Event){
  const input = event.target as HTMLInputElement;
  const newValue = input.value;
  this.persona1.update(prevState => {
    return {
      ...prevState,
      name1: newValue
    }
  });
}

changAgeSignal(event: Event){
  const input = event.target as HTMLInputElement;
  const newValue = parseInt(input.value, 10);
  this.persona1.update(prevState =>{
    return {
      ...prevState,
      edad1: newValue
    }
  });
}

}
