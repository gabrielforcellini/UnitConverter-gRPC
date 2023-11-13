import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import 'dotenv/config'
import { ProtoGrpcType } from '../src/proto/TemperatureConversion'
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
      const celsius = req.request.celsius;
      const calc = (9/5) * celsius + 32;
      res(null, { fahrenheit: calc})
    }
  } as CelsiusToFahrenheitHandlers)

  server.addService(conversionService.CelsiusToKelvin.service, {
    CelsiusToKelvin: (req, res) => {
      const celsius = req.request.celsius;
      const calc = celsius + 273.15;
      res(null, { kelvin: calc });
    }
  } as CelsiusToKelvinHandlers)

  server.addService(dimensionService.MeterToKilometer.service, {
    MeterToKilometer: (req, res) => {
      const meter = req.request.meter;
      const calc = meter / 1000;
      res(null, { kilometer: calc })
    }
  } as MeterToKilometerHandlers)

  server.addService(dimensionService.InchToCentimeter.service, {
    InchToCentimeter: (req, res) => {
      const inch = req.request.inch;
      const calc = inch * 2.54;
      res(null, { centimeter : calc })
    }
  } as InchToCentimeterHandlers)

  return server
}

main()
