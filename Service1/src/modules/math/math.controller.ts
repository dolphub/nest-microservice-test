import { MessagePattern } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';

@Controller()
export class MathController {
    constructor() { }

    @MessagePattern({ cmd: 'sum' })
    getAll(data: number[]): number {
        return (data || []).reduce((a, b) => a + b);
    }
}
