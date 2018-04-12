import { Controller, Get, Inject, Post, HttpCode, Param, Body, UsePipes, Patch } from '@nestjs/common';
import { Transport, ClientProxy, Client } from '@nestjs/microservices';
import { Observable } from 'rxjs/Observable';

// @NOTE: This would be part of the provider instance
const REDIS_URI = process.env.REDIS_URI || 'redis://localhost:6379';

@Controller('math')
export class MathController {

    // @NOTE: This would be pulled from a DI instance of a provider
    @Client({ transport: Transport.REDIS, url: REDIS_URI })
    client: ClientProxy;

    constructor() { }

    @Get()
    get(): Observable<number> {
        const pattern = { cmd: 'sum' };
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return this.client.send<number>(pattern, data);
    
    }
}
