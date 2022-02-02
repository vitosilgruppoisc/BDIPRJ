import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigurationService } from './configuration.service';

@Injectable()
export class LokiHttpInterceptor implements HttpInterceptor {

    private apiEndpoint = '';

    private authToken: string;

    constructor(private configurationService: ConfigurationService) {
        this.configurationService.config$.subscribe(config => {
            this.apiEndpoint = config.apiEndpoint;
            // N.B: In questo caso il BE si può trovare su due endpoint [anagrafiche e pagamenti] per cui
            // deve essere onere del servizio includere la base url
            this.apiEndpoint = '';
        });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the auth header from the service.
        // Clone the request to add the authentication header and the base uri.
        let url: string;

        // req = req.clone({
        //     withCredentials: true
        // });

        if (req.url.endsWith('.json') || req.url.endsWith('.md')) {
            url = req.url;
        } else {
            url = `${this.apiEndpoint}${req.url}`;
        }

        console.log('Injected withCredentials=true for ' + req.url);
        let headers = req.headers;

        // for local basic auth
        // if (localAuth.authToken) {
        //     console.log('adding authToken to request');
        //     headers = headers.set('Authorization', localAuth.authToken);
        // }

        const authReq = req.clone({ url, headers });
        // Pass on the cloned request instead of the original request.
        return next.handle(authReq);
    }
}
