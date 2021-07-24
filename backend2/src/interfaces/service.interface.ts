import { IBaseRepository } from "./repository.interface";
export interface IBaseService {  
  create(element: any, findCriteria: any): any,
  update(id: string, element: any): any,  
  getAll(query: any, populateField: string[]): any,
  getOne(data: any, populateField: string[]): any,
  getById(id: string, populateField:string[]): any,
  remove(id: string): any,
}
