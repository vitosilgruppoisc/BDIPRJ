import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {Observable, of} from 'rxjs';
import {GetPartiesResponse, TipoParty} from '../models/party';
import {catchError, tap} from 'rxjs/operators';
import {
    GetTasksResponse,
    OperazioneTask,
    StatoTask,
    Task,
    TaskConto, TaskEccReachabilityRetail,
    TaskEccTranscodingIngrosso, TaskEccTranscodingRetail,
    TaskParty,
    TaskSfruttamentoAnsyDca,
    TipoTask
} from '../models/task';
import {FilialeRiferimento} from '../models/filiale';
import {TipoOperazioneEnum} from '../models/enum';
import {TipoConto} from '../models/conto';
import {SearchModel} from "../models/search";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private apiEndpoint = '';

    public searchModel: SearchModel;

    constructor(private http: HttpClient, private configurationService: ConfigurationService) {
        this.configurationService.config$.subscribe(config => {
            this.apiEndpoint = config.gepaAnagraficheU2AEndpoint;
        });
    }

    getTipoTask(): Observable<TipoTask[]> {
        return this.http.get<TipoTask[]>(`${this.apiEndpoint}/tipiTask`).pipe(
            tap(res => console.log(res))
        );
    }

    getOperazione(): Observable<OperazioneTask[]> {
        return this.http.get<OperazioneTask[]>(`${this.apiEndpoint}/tipiOperazione`).pipe(
            tap(res => console.log(res))
        );
    }

    getStatoTask(): Observable<StatoTask[]> {
        return this.http.get<StatoTask[]>(`${this.apiEndpoint}/statiStaging`).pipe(
            tap(res => console.log(res))
        );
    }

    getTasks(searchString: string): Observable<GetTasksResponse> {
        return this.http.get<GetTasksResponse>(`${this.apiEndpoint}/tasks?${searchString}`).pipe(
            tap(res => console.log(res))
        );
    }

    getTaskParty(id: string): Observable<TaskParty> {
        return this.http.get<TaskParty>(`${this.apiEndpoint}/tasks/${id}/party`).pipe(
            tap(res => console.log(res))
        );
    }

    saveTaskParty(taskParty: TaskParty): Observable<TaskParty> {
        return this.http.post<TaskParty>(`${this.apiEndpoint}/tasks/party`, taskParty).pipe(
            tap(res => console.log(res))
        );
    }

    confermaTaskParty(task: Task): Observable<Task> {
        return this.patchTaskParty(task);
    }

    rifiutaTaskParty (task: Task): Observable<Task> {
        return this.patchTaskParty(task);
    }

    private patchTaskParty (task: Task): Observable<Task> {
        return this.http.patch<Task>(`${this.apiEndpoint}/tasks/${task.id}/party`, task).pipe(
            tap(res => console.log(res))
        );
    }

    getTaskConto(id: string): Observable<TaskConto> {
        return this.http.get<TaskConto>(`${this.apiEndpoint}/tasks/${id}/conto`).pipe(
            tap(res => console.log(res))
        );
    }

    saveTaskConto(taskConto: TaskConto): Observable<TaskConto> {
        return this.http.post<TaskConto>(`${this.apiEndpoint}/tasks/conto`, taskConto).pipe(
            tap(res => console.log(res))
        );
    }

    confermaTaskConto(task: Task): Observable<Task> {
        return this.patchTaskConto(task);
    }

    rifiutaTaskConto (task: Task): Observable<Task> {
        return this.patchTaskConto(task);
    }

    private patchTaskConto (task: Task): Observable<Task> {
        return this.http.patch<Task>(`${this.apiEndpoint}/tasks/${task.id}/conto`, task).pipe(
            tap(res => console.log(res))
        );
    }

    getTaskSfruttamentoAnsyDca(id: string): Observable<TaskSfruttamentoAnsyDca> {
        return this.http.get<TaskSfruttamentoAnsyDca>(`${this.apiEndpoint}/tasks/${id}/sfruttamentoDca`).pipe(
            tap(res => console.log(res))
        );
    }

    saveTaskSfruttamentoAnsyDca(taskSfruttamentoAnsyDca: TaskSfruttamentoAnsyDca): Observable<TaskSfruttamentoAnsyDca> {
        return this.http.post<TaskSfruttamentoAnsyDca>(`${this.apiEndpoint}/tasks/sfruttamentoDca`, taskSfruttamentoAnsyDca).pipe(
            tap(res => console.log(res))
        );
    }

    confermaTaskSfruttamentoAnsyDca(task: Task): Observable<Task> {
        return this.patchTaskSfruttamentoAnsyDca(task);
    }

    rifiutaTaskSfruttamentoAnsyDca (task: Task): Observable<Task> {
        return this.patchTaskSfruttamentoAnsyDca(task);
    }

    private patchTaskSfruttamentoAnsyDca (task: Task): Observable<Task> {
        return this.http.patch<Task>(`${this.apiEndpoint}/tasks/${task.id}/sfruttamentoDca`, task).pipe(
            tap(res => console.log(res))
        );
    }

    getTaskEccTranscodingIngrosso(id: string): Observable<TaskEccTranscodingIngrosso> {
        return this.http.get<TaskEccTranscodingIngrosso>(`${this.apiEndpoint}/tasks/${id}/eccTranscodingIngrosso`).pipe(
            tap(res => console.log(res))
        );
    }

    saveTaskEccTranscodingIngrosso(taskEccTranscodingIngrosso: TaskEccTranscodingIngrosso): Observable<TaskEccTranscodingIngrosso> {
        return this.http.post<TaskEccTranscodingIngrosso>(`${this.apiEndpoint}/tasks/eccTranscodingIngrosso`, taskEccTranscodingIngrosso).pipe(
            tap(res => console.log(res))
        );
    }

    confermaTaskEccTranscodingIngrosso(task: Task): Observable<Task> {
        return this.patchTaskEccTranscodingIngrosso(task);
    }

    rifiutaTaskEccTranscodingIngrosso (task: Task): Observable<Task> {
        return this.patchTaskEccTranscodingIngrosso(task);
    }

    private patchTaskEccTranscodingIngrosso (task: Task): Observable<Task> {
        return this.http.patch<Task>(`${this.apiEndpoint}/tasks/${task.id}/eccTranscodingIngrosso`, task).pipe(
            tap(res => console.log(res))
        );
    }

    saveTaskEccTranscodingRetail(taskEccTranscodingRetail: TaskEccTranscodingRetail): Observable<TaskEccTranscodingRetail> {
        return this.http.post<TaskEccTranscodingRetail>(`${this.apiEndpoint}/tasks/eccTranscodingRetail`, taskEccTranscodingRetail).pipe(
            tap(res => console.log(res))
        );
    }

    getTaskEccTranscodingRetail(id: string): Observable<TaskEccTranscodingRetail> {
        return this.http.get<TaskEccTranscodingRetail>(`${this.apiEndpoint}/tasks/${id}/eccTranscodingRetail`).pipe(
            tap(res => console.log(res))
        );
    }

    confermaTaskEccTranscodingRetail(task: Task): Observable<Task> {
        return this.patchTaskEccTranscodingRetail(task);
    }

    rifiutaTaskEccTranscodingRetail (task: Task): Observable<Task> {
        return this.patchTaskEccTranscodingRetail(task);
    }

    private patchTaskEccTranscodingRetail (task: Task): Observable<Task> {
        return this.http.patch<Task>(`${this.apiEndpoint}/tasks/${task.id}/eccTranscodingRetail`, task).pipe(
            tap(res => console.log(res))
        );
    }

    saveTaskEccReachabilityRetail(taskEccReachabilityRetail: TaskEccReachabilityRetail): Observable<TaskEccReachabilityRetail> {
        return this.http.post<TaskEccReachabilityRetail>(`${this.apiEndpoint}/tasks/eccReachabilityRetail`, taskEccReachabilityRetail).pipe(
            tap(res => console.log(res))
        );
    }

    getTaskEccReachabilityRetail(id: string): Observable<TaskEccReachabilityRetail> {
        return this.http.get<TaskEccReachabilityRetail>(`${this.apiEndpoint}/tasks/${id}/eccReachabilityRetail`).pipe(
            tap(res => console.log(res))
        );
    }

    confermaTaskEccReachabilityRetail(task: Task): Observable<Task> {
        return this.patchTaskEccReachabilityRetail(task);
    }

    rifiutaTaskEccReachabilityRetail (task: Task): Observable<Task> {
        return this.patchTaskEccReachabilityRetail(task);
    }

    private patchTaskEccReachabilityRetail (task: Task): Observable<Task> {
        return this.http.patch<Task>(`${this.apiEndpoint}/tasks/${task.id}/eccReachabilityRetail`, task).pipe(
            tap(res => console.log(res))
        );
    }
}
