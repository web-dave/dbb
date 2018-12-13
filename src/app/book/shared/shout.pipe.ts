import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shout"
})
export class ShoutPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const str =
      typeof value === "object" ? JSON.stringify(value) : String(value);

    return str.toUpperCase();
  }
}
