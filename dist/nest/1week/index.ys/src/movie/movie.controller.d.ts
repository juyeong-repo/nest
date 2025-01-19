import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entity/movie.entity';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    getMovies(title?: string): Movie[];
    getMovie(id: string): Movie;
    postMoive(body: CreateMovieDto): Movie;
    patchMoive(id: string, body: UpdateMovieDto): Movie;
    deleteMoive(id: string): any;
}
