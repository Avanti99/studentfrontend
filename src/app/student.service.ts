import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from './student';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiServerUrl}/students`);
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiServerUrl}/students`, student);
  }

  public updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiServerUrl}/students`, student);
  }

  public deleteStudent(studentID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/students/${studentID}`);
  }
}