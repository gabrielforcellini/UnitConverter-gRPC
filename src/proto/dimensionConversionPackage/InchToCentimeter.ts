// Original file: src/proto/dimensionConversion.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { InchToCentimeterRequest as _dimensionConversionPackage_InchToCentimeterRequest, InchToCentimeterRequest__Output as _dimensionConversionPackage_InchToCentimeterRequest__Output } from '../dimensionConversionPackage/InchToCentimeterRequest';
import type { InchToCentimeterResponse as _dimensionConversionPackage_InchToCentimeterResponse, InchToCentimeterResponse__Output as _dimensionConversionPackage_InchToCentimeterResponse__Output } from '../dimensionConversionPackage/InchToCentimeterResponse';

export interface InchToCentimeterClient extends grpc.Client {
  InchToCentimeter(argument: _dimensionConversionPackage_InchToCentimeterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dimensionConversionPackage_InchToCentimeterResponse__Output>): grpc.ClientUnaryCall;
  InchToCentimeter(argument: _dimensionConversionPackage_InchToCentimeterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dimensionConversionPackage_InchToCentimeterResponse__Output>): grpc.ClientUnaryCall;
  InchToCentimeter(argument: _dimensionConversionPackage_InchToCentimeterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dimensionConversionPackage_InchToCentimeterResponse__Output>): grpc.ClientUnaryCall;
  InchToCentimeter(argument: _dimensionConversionPackage_InchToCentimeterRequest, callback: grpc.requestCallback<_dimensionConversionPackage_InchToCentimeterResponse__Output>): grpc.ClientUnaryCall;
  inchToCentimeter(argument: _dimensionConversionPackage_InchToCentimeterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dimensionConversionPackage_InchToCentimeterResponse__Output>): grpc.ClientUnaryCall;
  inchToCentimeter(argument: _dimensionConversionPackage_InchToCentimeterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dimensionConversionPackage_InchToCentimeterResponse__Output>): grpc.ClientUnaryCall;
  inchToCentimeter(argument: _dimensionConversionPackage_InchToCentimeterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dimensionConversionPackage_InchToCentimeterResponse__Output>): grpc.ClientUnaryCall;
  inchToCentimeter(argument: _dimensionConversionPackage_InchToCentimeterRequest, callback: grpc.requestCallback<_dimensionConversionPackage_InchToCentimeterResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface InchToCentimeterHandlers extends grpc.UntypedServiceImplementation {
  InchToCentimeter: grpc.handleUnaryCall<_dimensionConversionPackage_InchToCentimeterRequest__Output, _dimensionConversionPackage_InchToCentimeterResponse>;
  
}

export interface InchToCentimeterDefinition extends grpc.ServiceDefinition {
  InchToCentimeter: MethodDefinition<_dimensionConversionPackage_InchToCentimeterRequest, _dimensionConversionPackage_InchToCentimeterResponse, _dimensionConversionPackage_InchToCentimeterRequest__Output, _dimensionConversionPackage_InchToCentimeterResponse__Output>
}
