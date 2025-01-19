import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entity/movie.entity';
export declare class MovieService {
    private movies;
    private idCount;
    constructor();
    getManyMovies(title: any): Movie[];
    getMovieById(id: number): Movie;
    createMovie(body: CreateMovieDto): {
        id: number;
        title: string;
        genre: string;
    };
    updateMovie(id: any, body: UpdateMovieDto): Movie;
    deleteMovie(id: any): any;
}
