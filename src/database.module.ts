// database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://honghaibui1192:Latumi1192!@badatenbank.wuvcnjq.mongodb.net/?retryWrites=true&w=majority',
      {},
    ),
  ],
})
export class DatabaseModule {}
