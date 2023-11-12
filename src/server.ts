import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import 'dotenv/config'
import { ProtoGrpcType } from '../src/proto/temperatureConversion'
import { ProtoGrpcType as ProtoGrpcDimensionType } from './proto/dimensionConversion'
import { CelsiusToFahrenheitHandlers } from './proto/temperatureConversionPackage/CelsiusToFahrenheit'
import { CelsiusToKelvinHandlers } from './proto/temperatureConversionPackage/CelsiusToKelvin'
import { InchToCentimeterHandlers } from './proto/dimensionConversionPackage/InchToCentimeter'
import { MeterToKilometerHandlers } from './proto/dimensionConversionPackage/MeterToKilometer'

const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;
const PROTO_FILE = './proto/temperatureConversion.proto'
const PROT_DIMENSION_FILE = './proto/dimensionConversion.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const conversionService = grpcObj.temperatureConversionPackage
const packageDimensionDef = protoLoader.loadSync(path.resolve(__dirname, PROT_DIMENSION_FILE))
const grpcDimensionObj = (grpc.loadPackageDefinition(packageDimensionDef) as unknown) as ProtoGrpcDimensionType
const dimensionService = grpcDimensionObj.dimensionConversionPackage

function main() {
  const server = getServer()

  server.bindAsync(`${HOST}:${PORT}`, grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.log(err);
        return
      }
      console.log(`server started on port ${port}`);
      server.start()

    })
}

function getServer() {
  const server = new grpc.Server()
  server.addService(conversionService.CelsiusToFahrenheit.service, {
    CelsiusToFahrenheit: (req, res) => {
      console.log(req.request);
      res(null, { fahrenheit: 10.0 })
    }
  } as CelsiusToFahrenheitHandlers)

  server.addService(conversionService.CelsiusToKelvin.service, {
    CelsiusToKelvin: (req, res) => {
      console.log(req, res);
    }
  } as CelsiusToKelvinHandlers)

  server.addService(dimensionService.MeterToKilometer.service, {
    MeterToKilometer: (req, res) => {
      console.log(req.request);
      res(null, { kilometer: 12.0 })
    }
  } as MeterToKilometerHandlers)

  return server
}

main()
