import { Observable } from 'rxjs/Observable';
import {HttpErrorResponse} from '@angular/common/http';

export class HandlerError {
    static handleError(error: HttpErrorResponse | any){
        let errorMessage: string;
        if (error instanceof HttpErrorResponse) {
            const body = error.error;
            
            errorMessage = `Erro ${error.status} ao acessar a url ${error.url} - ${error.statusText || ''} ${body}`;
        } else {
            errorMessage = error.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}