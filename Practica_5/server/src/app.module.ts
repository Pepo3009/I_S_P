import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { RolesModule } from './roles/roles.module';
import { PersonaModule } from './persona/persona.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { DocumentoModule } from './documento/documento.module';
import { DepartamentoUsuarioModule } from './departamento_usuario/departamento_usuario.module';
import { SolicitudBajaModule } from './solicitud_baja/solicitud_baja.module';
import { ProcesoDeterminadoModule } from './proceso_determinado/proceso_determinado.module';
import { FlujoProcesoModule } from './flujo_proceso/flujo_proceso.module';
import { ProcesoModule } from './proceso/proceso.module';
import { TipoFlujoProcesoModule } from './tipo_flujo_proceso/tipo_flujo_proceso.module';
import { OpcionesModule } from './opciones/opciones.module';
import config from './config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MensajeUserModule } from './mensaje_user/mensaje_user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({  
  imports: [    
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ConfigModule.forRoot({
      envFilePath: ['.develop.env'],
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb+srv://jjrz1350517171:1350517171@cluster0.ezxkxg9.mongodb.net/'),
    AuthModule,
    UserModule,
    CiudadModule,
    RolesModule,
    PersonaModule,
    DepartamentoModule,
    DocumentoModule,
    DepartamentoUsuarioModule,
    SolicitudBajaModule,
    ProcesoDeterminadoModule,
    FlujoProcesoModule,
    ProcesoModule,
    TipoFlujoProcesoModule,
    OpcionesModule,
    MensajeUserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
