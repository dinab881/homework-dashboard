import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable()
export class WidgetService {

    constructor(private http:HttpClient) {
    }

    getWidgets():Observable<any> {
        return this.http.get('assets/widgets.json').pipe(map(data=> {
            let widgetList = data["widgetList"];
            return widgetList
                /*.map(data => {
                    console.log(data);
                    data.sort((a, b) => {
                        if (a.order < b.order)
                            return -1;
                        if (a.order > b.order)
                            return 1;
                        return 0;
                    });

                    return data;
                })*/
                .filter(w => {
                    return w.visible == true;

                });

        }));
    }

}
