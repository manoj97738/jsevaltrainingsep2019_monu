import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'madhur' })
export class MadhurPipe implements PipeTransform {
  transform(value: number, para1: number, para2: number) {
    return value * para1 * para2;
  }
}
