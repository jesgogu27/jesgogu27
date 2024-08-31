import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { MarketModule } from './market/market.module';
import { VideosModule } from './videos/videos.module';
import { AwardsModule } from './awards/awards.module';

@Module({
  imports: [CoursesModule, AuthModule, MarketModule, VideosModule, AwardsModule], //importar modulos
  controllers: [AppController], //maneja las peticiones http
  providers: [AppService],
})
export class AppModule {}
