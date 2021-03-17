// import * as url from 'url';
import axios from "axios";
import Movie from "../dto/Movie";
import OmdbApiSearch from "../dto/OmdbApiSerach";

export default class OmdbService {
    public async search(params: OmdbApiSearch) {
        const baseUrlOmdb = process.env.OMDB_API_BASE_URL || '';
        const omdbKey = process.env.OMDB_KEY || null;
        params.apikey = omdbKey;

        const data = await axios.get<{Search: Movie[]}>(baseUrlOmdb,{params: params});

        return data.data.Search;
    }
    
    public async detail(params: OmdbApiSearch) {
        const baseUrlOmdb = process.env.OMDB_API_BASE_URL || '';
        const omdbKey = process.env.OMDB_KEY || null;
        params.apikey = omdbKey;

        const data = await axios.get<Movie | null>(baseUrlOmdb,{params: params});

        return data;
    }
}