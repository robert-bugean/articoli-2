import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DataService implements InMemoryDbService {
  createDb() {
    return {
      articles: [
        { id: 1, title: 'A', content: '' },
        { id: 2, title: 'B', content: '' },
        { id: 3, title: 'C', content: '' },
      ],
    };
  }
}