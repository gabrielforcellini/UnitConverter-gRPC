// Original file: src/proto/TemperatureConversion.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CelsiusToKelvinRequest as _temperatureConversionPackage_CelsiusToKelvinRequest, CelsiusToKelvinRequest__Output as _temperatureConversionPackage_CelsiusToKelvinRequest__Output } from '../temperatureConversionPackage/CelsiusToKelvinRequest';
import type { CelsiusToKelvinResponse as _temperatureConversionPackage_CelsiusToKelvinResponse, CelsiusToKelvinResponse__Output as _temperatureConversionPackage_CelsiusToKelvinResponse__Output } from '../temperatureConversionPackage/CelsiusToKelvinResponse';

export interface CelsiusToKelvinClient extends grpc.Client {
  CelsiusToKelvin(argument: _temperatureConversionPackage_CelsiusToKelvinRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_temperatureConversionPackage_CelsiusToKelvinResponse__Output>): grpc.ClientUnaryCall;
  CelsiusToKelvin(argument: _temperatureConversionPackage_CelsiusToKelvinRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_temperatureConversionPackage_CelsiusToKelvinResponse__Output>): grpc.ClientUnaryCall;
  CelsiusToKelvin(argument: _temperatureConversionPackage_CelsiusToKelvinRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_temperatureConversionPackage_CelsiusToKelvinResponse__Output>): grpc.ClientUnaryCall;
  CelsiusToKelvin(argument: _temperatureConversionPackage_CelsiusToKelvinRequest, callback: grpc.requestCallback<_temperatureConversionPackage_CelsiusToKelvinResponse__Output>): grpc.ClientUnaryCall;
  celsiusToKelvin(argument: _temperatureConversionPackage_CelsiusToKelvinRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_temperatureConversionPackage_CelsiusToKelvinResponse__Output>): grpc.ClientUnaryCall;
  celsiusToKelvin(argument: _temperatureConversionPackage_CelsiusToKelvinRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_temperatureConversionPackage_CelsiusToKelvinResponse__Output>): grpc.ClientUnaryCall;
  celsiusToKelvin(argument: _temperatureConversionPackage_CelsiusToKelvinRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_temperatureConversionPackage_CelsiusToKelvinResponse__Output>): grpc.ClientUnaryCall;
  celsiusToKelvin(argument: _temperatureConversionPackage_CelsiusToKelvinRequest, callback: grpc.requestCallback<_temperatureConversionPackage_CelsiusToKelvinResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CelsiusToKelvinHandlers extends grpc.UntypedServiceImplementation {
  CelsiusToKelvin: grpc.handleUnaryCall<_temperatureConversionPackage_CelsiusToKelvinRequest__Output, _temperatureConversionPackage_CelsiusToKelvinResponse>;
  
}

export interface CelsiusToKelvinDefinition extends grpc.ServiceDefinition {
  CelsiusToKelvin: MethodDefinition<_temperatureConversionPackage_CelsiusToKelvinRequest, _temperatureConversionPackage_CelsiusToKelvinResponse, _temperatureConversionPackage_CelsiusToKelvinRequest__Output, _temperatureConversionPackage_CelsiusToKelvinResponse__Output>
}
