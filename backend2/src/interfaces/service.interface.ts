import { IBaseRepository } from "./repository.interface";
export interface IBaseService {  
  create(element: any, findCriteria: any): any,
  update(id: string, element: any): any,  
  getAll(query: any, populateField: any): any,
  getOne(data: any, populateField: any): any,
  getById(id: string, populateField: any): any,
  remove(id: string): any,
}
