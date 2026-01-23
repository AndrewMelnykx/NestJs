import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function getTypeormConfig(
  configService: ConfigService,
): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: configService.getOrThrow<string>('POSTGRES_HOST'),
    username: configService.getOrThrow<string>('POSTGRES_USERNAME'),
    port: configService.getOrThrow<number>('POSTGRES_PORT'),
    password: configService.getOrThrow<string>('POSTGRES_PASSWORD'),
    database: configService.getOrThrow<string>('POSTGRES_DATABASE'),
    autoLoadEntities: true,
    synchronize: true,
  };
}
