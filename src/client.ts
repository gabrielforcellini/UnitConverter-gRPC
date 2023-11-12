import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import 'dotenv/config'
import { ProtoGrpcType } from '../src/proto/temperatureConversion'
import { ProtoGrpcType as ProtoGrpcDimensionType } from './proto/dimensionConversion'

const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;
const PROTO_FILE = './proto/temperatureConversion.proto'
const PROT_DIMENSION_FILE = './proto/dimensionConversion.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const packageDimensionDef = protoLoader.loadSync(path.resolve(__dirname, PROT_DIMENSION_FILE))
const grpcDimensionObj = (grpc.loadPackageDefinition(packageDimensionDef) as unknown) as ProtoGrpcDimensionType

const CelsiusToFahrenheit = new grpcObj.temperatureConversionPackage.CelsiusToFahrenheit(
  `${HOST}:${PORT}`, grpc.credentials.createInsecure()
)

const CelsiusToKelvin = new grpcObj.temperatureConversionPackage.CelsiusToKelvin(
  `${HOST}:${PORT}`, grpc.credentials.createInsecure()
)

const MeterToKilometer = new grpcDimensionObj.dimensionConversionPackage.MeterToKilometer(
  `${HOST}:${PORT}`, grpc.credentials.createInsecure()
)

CelsiusToFahrenheit.CelsiusToFahrenheit({ celsius: 1 }, (err, result) => {
  if (err) {
    console.error(err);
    return
  }
  console.log(result);
})

CelsiusToKelvin.CelsiusToKelvin({ celsius: 1 }, (err, result) => {
  if (err) {
    console.error(err);
    return
  }
  console.log(result);
})

MeterToKilometer.MeterToKilometer({ meter: 1 }, (err, result) => {
  if (err) {
    console.error(err);
    return
  }
  console.log(result);
})