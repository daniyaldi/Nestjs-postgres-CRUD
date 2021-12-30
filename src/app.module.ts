import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { DataModule } from './data/data.module';
import { DataService } from './data/services/data.service';
import { DataController } from './data/controllers/data.controller';

@Module({

  imports: [ProductsModule,
  ConfigModule.forRoot({isGlobal : true}),
  TypeOrmModule.forRoot({
  type : 'postgres',
  host : '127.0.0.1' ,
  port: 5432,
  username:'postgres',
  password:"1234",
  database:"linkedIn" ,
  autoLoadEntities:true,
  synchronize:true
  }),
  DataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
