import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import 'dotenv/config'
import { ProtoGrpcType } from './proto/conversion'
import { TemperatureServiceHandlers } from './proto/conversionPackage/TemperatureService'

const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;
const PROTO_FILE = './proto/conversion.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const conversionService = grpcObj.conversionPackage

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
  server.addService(conversionService.TemperatureService.service, {
    "CelsiusToFahrenheit": (req, res) => {
      console.log(req, res);      
    }
  } as TemperatureServiceHandlers)

  return server
}

main()
