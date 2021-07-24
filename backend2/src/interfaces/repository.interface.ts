export interface IBaseRepository{
    
    validId(id:string):boolean,
    create(element:any):Promise<any>,
    getAll(params :any, populateField:string[]):Promise<any>,
     update(id:string, element:any):Promise<any>,
    getById(id:string, populateField?:string[]):Promise<any>,
    getOne(element:any, populateField?:string[]) :Promise<any>,
    remove(id:string):Promise<any>,
}