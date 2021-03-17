
import { Get, JsonController, QueryParams } from 'routing-controllers';
import "reflect-metadata";
import OmdbService from '../services/OmdbService';
import OmdbApiSearch from '../dto/OmdbApiSerach';
import Movie from '../dto/Movie';

@JsonController()
export class SearchController {

    @Get('/search')
    public async index(@QueryParams() query: OmdbApiSearch): Promise<Movie[] | undefined> {
        const omdbService = new OmdbService();

        return await omdbService.search(query);
    }
}