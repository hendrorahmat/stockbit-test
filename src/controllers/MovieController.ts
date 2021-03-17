
import { Controller, Get, Param, QueryParams } from 'routing-controllers';
import "reflect-metadata";
import OmdbApiSearch from '../dto/OmdbApiSerach';
import OmdbService from '../services/OmdbService';
import Movie from '../dto/Movie';

@Controller()
export class MovieController {
    @Get('/:id/detail')
    public async index(@Param('id') id: string, @QueryParams() query: OmdbApiSearch): Promise<Movie | null> {
        const omdbService = new OmdbService();
        query.i = id;
        const data = await omdbService.detail(query);

        return data.data;
    }
}