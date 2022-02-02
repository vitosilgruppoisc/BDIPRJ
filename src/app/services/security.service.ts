import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { EUserRole, IUser } from '../models';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class SecurityService implements CanActivate {

    private grantedRoles: EUserRole[];

    constructor(private router: Router, private userService: UserService) {
        this.grantedRoles = userService.getRoles();
    }

    /**
     * Questo handler e' invocato dal Router Angular ogni volta che l'utente richiede l'attivazione di una nuova rotta
     * (ad esempio clickando un link del menu' o inserendo direttamente un indirizzo nella barra di navigazione del browser)
     * L'handler verifica, qualora la rotta in questione dichiari una restrizione di accesso basata sui ruoli, che l'utente
     * disponga dei necessari permessi
     **/
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        // Verifica se la rotta richiesta presenta delle restrizioni di ruolo.
        // Le restrizioni sono espresse tramite il campo data dell'oggetto Route nei RoutingModule dei singoli moduli
        // (vedi la dichiarazione della rotta /admin nel file app.module.ts)
        if (route.data.roles) {
            const requiredRoles: EUserRole[] = route.data.roles;
            // Ritorno true e consento la navigazione se l'utente ha i privilegi richiesti
            if (this.checkPermissions(requiredRoles)) {
                return true;
            }
            // L'utente non dispone di permessi sufficienti
            // Posso redirezionare l'utente alla home page o ad un'altra pagina (es. pagina accesso negato o pagina login)
            this.router.navigate(['/error/401'], { queryParams: { returnUrl: state.url }, skipLocationChange: true });
            // In definitiva devo comunque bloccare la navigazione verso la rotta richiesta restituendo false.
            return false;
        }
        // La rotta non richiede permessi particolari, proseguo nella navigazione
        return true;
    }

    checkPermissions(requiredRoles: EUserRole[]): boolean {
        // Verifico che l'utente disponga di almeno uno dei ruoli richiesti per l'accesso
        if (this.grantedRoles) {
            const intersection = this.grantedRoles.filter(userRole => requiredRoles.includes(userRole));
            if (intersection.length > 0) {
                // L'utente possiede il ruolo richiesto, la guardia restituisce true e la navigazione prosegue
                return true;
            }
        }
        return false;
    }

}
