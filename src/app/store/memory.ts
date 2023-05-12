import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DataService implements InMemoryDbService {
  createDb() {
    return {
      articles: [
        { id: 1, title: 'A', content: 'content a' },
        { id: 2, title: 'B', content: 'content b' },
        { id: 3, title: 'C', content: 'content c' },
      ],
    };
  }
}