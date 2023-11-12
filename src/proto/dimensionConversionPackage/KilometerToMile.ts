// Original file: src/proto/dimensionConversion.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { KilometerToMileRequest as _dimensionConversionPackage_KilometerToMileRequest, KilometerToMileRequest__Output as _dimensionConversionPackage_KilometerToMileRequest__Output } from '../dimensionConversionPackage/KilometerToMileRequest';
import type { KilometerToMileResponse as _dimensionConversionPackage_KilometerToMileResponse, KilometerToMileResponse__Output as _dimensionConversionPackage_KilometerToMileResponse__Output } from '../dimensionConversionPackage/KilometerToMileResponse';

export interface KilometerToMileClient extends grpc.Client {
  KilometerToMile(argument: _dimensionConversionPackage_KilometerToMileRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dimensionConversionPackage_KilometerToMileResponse__Output>): grpc.ClientUnaryCall;
  KilometerToMile(argument: _dimensionConversionPackage_KilometerToMileRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dimensionConversionPackage_KilometerToMileResponse__Output>): grpc.ClientUnaryCall;
  KilometerToMile(argument: _dimensionConversionPackage_KilometerToMileRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dimensionConversionPackage_KilometerToMileResponse__Output>): grpc.ClientUnaryCall;
  KilometerToMile(argument: _dimensionConversionPackage_KilometerToMileRequest, callback: grpc.requestCallback<_dimensionConversionPackage_KilometerToMileResponse__Output>): grpc.ClientUnaryCall;
  kilometerToMile(argument: _dimensionConversionPackage_KilometerToMileRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dimensionConversionPackage_KilometerToMileResponse__Output>): grpc.ClientUnaryCall;
  kilometerToMile(argument: _dimensionConversionPackage_KilometerToMileRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dimensionConversionPackage_KilometerToMileResponse__Output>): grpc.ClientUnaryCall;
  kilometerToMile(argument: _dimensionConversionPackage_KilometerToMileRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dimensionConversionPackage_KilometerToMileResponse__Output>): grpc.ClientUnaryCall;
  kilometerToMile(argument: _dimensionConversionPackage_KilometerToMileRequest, callback: grpc.requestCallback<_dimensionConversionPackage_KilometerToMileResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface KilometerToMileHandlers extends grpc.UntypedServiceImplementation {
  KilometerToMile: grpc.handleUnaryCall<_dimensionConversionPackage_KilometerToMileRequest__Output, _dimensionConversionPackage_KilometerToMileResponse>;
  
}

export interface KilometerToMileDefinition extends grpc.ServiceDefinition {
  KilometerToMile: MethodDefinition<_dimensionConversionPackage_KilometerToMileRequest, _dimensionConversionPackage_KilometerToMileResponse, _dimensionConversionPackage_KilometerToMileRequest__Output, _dimensionConversionPackage_KilometerToMileResponse__Output>
}
