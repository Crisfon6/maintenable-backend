export interface IBaseRepository{
    
    validId(id:string):boolean,
    create(element:any):Promise<any>,
    getAll(params :any, populateField:any):Promise<any>,
     update(id:string, element:any):Promise<any>,
    getById(id:string, populateField?:any):Promise<any>,
    getOne(element:any, populateField?:any) :Promise<any>,
    remove(id:string):Promise<any>,
}