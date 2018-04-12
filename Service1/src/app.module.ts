import * as path from 'path';
import { Module, NestModule, MiddlewaresConsumer } from '@nestjs/common';
import { MathModule } from './modules/math/math.module';

@Module({
    imports: [
        MathModule
    ]
})
export class ApplicationModule {}