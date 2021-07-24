import { IBaseRepository } from "../interfaces/repository.interface";
import { IBaseService } from "./../interfaces/service.interface";
export class BaseService implements IBaseService {
  repository: IBaseRepository;

  constructor(Repository: any) {
    this.repository = new Repository();
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.getById = this.getById.bind(this);
    this.remove = this.remove.bind(this);
  }

  async create(element: any, findCriteria = {}) {
    //findCriteria place for valid if this element is alredy saved

    let elementAlready = undefined;
    if (Object.keys(findCriteria).length > 0) {
      elementAlready = await this.repository.getOne(findCriteria);
      if (elementAlready) {
        throw {error: new Error("Element existing"),status: 404};
      }
    }

    const result = await this.repository.create(element);
    return result;
  }

  async update(id: string, element: any) {
    const elementAlready = await this.repository.getById(id);
    if (!elementAlready)
      throw { error: new Error(`Element not exists`), status: 404 };
    const result = await this.repository.update(id, element);
    return result;
  }
  async getAll(query: any, populateField: string[] = []) {
    //depends what you wants you send query as regex
    const result = await this.repository.getAll(query, populateField);
    return result;
  }
  async getOne(query: any, populateField: string[] = []) {
    const result = await this.repository.getOne(query, populateField);
    return result;
  }
  async getById(id: string, populateField: string[] = []) {
    const valid = await this.repository.validId(id);
    if (!valid) throw { error: new Error(`Invalid id ${id}`), status: 400 };
    const result = await this.repository.getById(id, populateField);
    return result;
  }
  async remove(id: string) {
    const valid = await this.repository.validId(id);
    if (!valid) throw { error: new Error(`Invalid id ${id}`), status: 400 };
    const result = await this.repository.remove(id);
    return result;
  }
}
