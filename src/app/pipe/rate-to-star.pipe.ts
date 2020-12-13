import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rateToStar'
})
export class RateToStarPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    const rait: number = parseFloat(value);

    if (rait <= 3)
    {
      return '*' ;
    }
    else if (rait <= 5 )
    {
      return '**';
    }
    else if (rait <= 8 )
    {
      return '***';
    }
    else
    {
      return '****';
    }

  }

}
