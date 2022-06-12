export interface IMovie {
  id: number;
  poster_path: string;
  title: string;
}

export class ApiService {
  static baseUrl = 'https://api.themoviedb.org/3';
  static apiKey = 'api_key=d0f5f2e135336200362af8a1a73acb17';

  static async getConfiguration(): Promise<string> {
    try {
      const response = await fetch(
        `${this.baseUrl}/configuration?${this.apiKey}`,
      );
      return (await response.json()).images.secure_base_url;
    } catch (error: any) {
      return '';
    }
  }

  static async getMovies(): Promise<IMovie[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/movie/popular?${this.apiKey}`,
      );
      return (await response.json()).results;
    } catch (error: any) {
      throw error.toString();
    }
  }
}
