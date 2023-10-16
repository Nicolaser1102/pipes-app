import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper:boolean = false): string {
    console.log({value, toUpper});

    //Si el valor 'toUpper' está en true
    return (toUpper)
    ? value.toUpperCase() //hacer el siguiente código
    : value.toLowerCase(); //pero si es falso hacer 'toLowerCase'
  }
}
