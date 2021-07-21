import { IBaseRepository } from "../interfaces/repository.interface";
import { IBaseService } from "./../interfaces/service.interface";
export class BaseService implements IBaseService {
  repository: IBaseRepository;

  constructor(Repository: any) {
    this.repository = new Repository();
  }

  async create(element: any, findCriteria = null) {
    //findCriteria place for valid if this element is alredy saved
    const elementAlready = await this.repository.getOne(findCriteria);
    if (elementAlready)
      throw { error: new Error(`Element already exists`), status: 400 };
    return await this.repository.create(element);
  }

  async update(id: string, element: any) {
    const elementAlready = await this.repository.getById(id);
    if (!elementAlready)
      throw { error: new Error(`Element not exists`), status: 404 };
    return await this.repository.update(id, element);
  }
  async getAll(query: any, populateField: any={}) {
    //depends what you wants you send query as regex
    return await this.repository.getAll(query, populateField);
  }
  async getOne(query: any, populateField: any={}) {
    return await this.repository.getOne(query, populateField);
  }
  async getById(id: string, populateField: any={}) {
    const valid = await this.repository.validId(id);
    if (!valid) throw { error: new Error(`Invalid id ${id}`), status: 400 };
    return await this.repository.getById(id, populateField);
  }
  async remove(id: string) {
    const valid = await this.repository.validId(id);
    if (!valid) throw { error: new Error(`Invalid id ${id}`), status: 400 };
    return await this.repository.remove(id);
  }
}
