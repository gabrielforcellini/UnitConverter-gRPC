// Original file: src/proto/dimensionConversion.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { MeterToKilometerRequest as _dimensionConversionPackage_MeterToKilometerRequest, MeterToKilometerRequest__Output as _dimensionConversionPackage_MeterToKilometerRequest__Output } from '../dimensionConversionPackage/MeterToKilometerRequest';
import type { MeterToKilometerResponse as _dimensionConversionPackage_MeterToKilometerResponse, MeterToKilometerResponse__Output as _dimensionConversionPackage_MeterToKilometerResponse__Output } from '../dimensionConversionPackage/MeterToKilometerResponse';

export interface MeterToKilometerClient extends grpc.Client {
  MeterToKilometer(argument: _dimensionConversionPackage_MeterToKilometerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dimensionConversionPackage_MeterToKilometerResponse__Output>): grpc.ClientUnaryCall;
  MeterToKilometer(argument: _dimensionConversionPackage_MeterToKilometerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dimensionConversionPackage_MeterToKilometerResponse__Output>): grpc.ClientUnaryCall;
  MeterToKilometer(argument: _dimensionConversionPackage_MeterToKilometerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dimensionConversionPackage_MeterToKilometerResponse__Output>): grpc.ClientUnaryCall;
  MeterToKilometer(argument: _dimensionConversionPackage_MeterToKilometerRequest, callback: grpc.requestCallback<_dimensionConversionPackage_MeterToKilometerResponse__Output>): grpc.ClientUnaryCall;
  meterToKilometer(argument: _dimensionConversionPackage_MeterToKilometerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dimensionConversionPackage_MeterToKilometerResponse__Output>): grpc.ClientUnaryCall;
  meterToKilometer(argument: _dimensionConversionPackage_MeterToKilometerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dimensionConversionPackage_MeterToKilometerResponse__Output>): grpc.ClientUnaryCall;
  meterToKilometer(argument: _dimensionConversionPackage_MeterToKilometerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dimensionConversionPackage_MeterToKilometerResponse__Output>): grpc.ClientUnaryCall;
  meterToKilometer(argument: _dimensionConversionPackage_MeterToKilometerRequest, callback: grpc.requestCallback<_dimensionConversionPackage_MeterToKilometerResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface MeterToKilometerHandlers extends grpc.UntypedServiceImplementation {
  MeterToKilometer: grpc.handleUnaryCall<_dimensionConversionPackage_MeterToKilometerRequest__Output, _dimensionConversionPackage_MeterToKilometerResponse>;
  
}

export interface MeterToKilometerDefinition extends grpc.ServiceDefinition {
  MeterToKilometer: MethodDefinition<_dimensionConversionPackage_MeterToKilometerRequest, _dimensionConversionPackage_MeterToKilometerResponse, _dimensionConversionPackage_MeterToKilometerRequest__Output, _dimensionConversionPackage_MeterToKilometerResponse__Output>
}
