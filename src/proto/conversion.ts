import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TemperatureServiceClient as _conversionPackage_TemperatureServiceClient, TemperatureServiceDefinition as _conversionPackage_TemperatureServiceDefinition } from './conversionPackage/TemperatureService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  conversionPackage: {
    TemperatureRequest: MessageTypeDefinition
    TemperatureResponse: MessageTypeDefinition
    TemperatureService: SubtypeConstructor<typeof grpc.Client, _conversionPackage_TemperatureServiceClient> & { service: _conversionPackage_TemperatureServiceDefinition }
  }
}

