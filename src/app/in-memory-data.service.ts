import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const lis  = [
      { id: 1, item: 'Shopping' , articals:['Milk', 'Soap','Chips','Shampoo','Chocolates']},
      { id: 2, item: 'Work',  articals:['Presentation', 'Files Review','Meeting'] },
      { id: 3, item: 'Europe Trip', articals:['Packing', 'Passport','Visa','Camera'] },
      { id: 4, item: 'Singapore Trip' , articals:['Appointment','Accommodation','Travel']}    ];
    return {lis};
  }
}
