import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Utils {

    constructor() { }

    getWildcardTooltip(): string {
        return 'Sul campo è abilitata la ricerca per wildcard (ad es. %xx%). La wildcard può essere utilizzata sia all’inizio che alla fine della stringa. Se la ricerca è con wildcard, dovranno essere inseriti almeno 2 caratteri, caratteri di wildcard esclusi.';
    }

    getModificaMessage(): string {
        return 'Attenzione il comportamento dell\'applicazione è differente a seconda che si valorizzi o meno la data di inizio validità: \<ul\>\<li\>\<b\>Se valorizzata\<\/b\>: la modifica chiude il record corrente e ne inserisce uno con i dati aggiornati\<li\><b\>Se non valorizzata\<\/b\>: la modifica aggiorna direttamente il record corrente\<\/li\>\<\/ul\>';
    }
}
