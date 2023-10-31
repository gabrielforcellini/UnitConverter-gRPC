// Original file: src/proto/conversion.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { TemperatureRequest as _conversionPackage_TemperatureRequest, TemperatureRequest__Output as _conversionPackage_TemperatureRequest__Output } from '../conversionPackage/TemperatureRequest';
import type { TemperatureResponse as _conversionPackage_TemperatureResponse, TemperatureResponse__Output as _conversionPackage_TemperatureResponse__Output } from '../conversionPackage/TemperatureResponse';

export interface TemperatureServiceClient extends grpc.Client {
  CelsiusToFahrenheit(argument: _conversionPackage_TemperatureRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_conversionPackage_TemperatureResponse__Output>): grpc.ClientUnaryCall;
  CelsiusToFahrenheit(argument: _conversionPackage_TemperatureRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_conversionPackage_TemperatureResponse__Output>): grpc.ClientUnaryCall;
  CelsiusToFahrenheit(argument: _conversionPackage_TemperatureRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_conversionPackage_TemperatureResponse__Output>): grpc.ClientUnaryCall;
  CelsiusToFahrenheit(argument: _conversionPackage_TemperatureRequest, callback: grpc.requestCallback<_conversionPackage_TemperatureResponse__Output>): grpc.ClientUnaryCall;
  celsiusToFahrenheit(argument: _conversionPackage_TemperatureRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_conversionPackage_TemperatureResponse__Output>): grpc.ClientUnaryCall;
  celsiusToFahrenheit(argument: _conversionPackage_TemperatureRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_conversionPackage_TemperatureResponse__Output>): grpc.ClientUnaryCall;
  celsiusToFahrenheit(argument: _conversionPackage_TemperatureRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_conversionPackage_TemperatureResponse__Output>): grpc.ClientUnaryCall;
  celsiusToFahrenheit(argument: _conversionPackage_TemperatureRequest, callback: grpc.requestCallback<_conversionPackage_TemperatureResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TemperatureServiceHandlers extends grpc.UntypedServiceImplementation {
  CelsiusToFahrenheit: grpc.handleUnaryCall<_conversionPackage_TemperatureRequest__Output, _conversionPackage_TemperatureResponse>;
  
}

export interface TemperatureServiceDefinition extends grpc.ServiceDefinition {
  CelsiusToFahrenheit: MethodDefinition<_conversionPackage_TemperatureRequest, _conversionPackage_TemperatureResponse, _conversionPackage_TemperatureRequest__Output, _conversionPackage_TemperatureResponse__Output>
}
