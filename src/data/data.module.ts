import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataController } from './controllers/data.controller';
import { DataPostEntity } from './models/post.entity';
import { DataService } from './services/data.service';

@Module({
  imports: [TypeOrmModule.forFeature([DataPostEntity])],
  providers: [DataService],
  controllers:[DataController],
})
export class DataModule {}
