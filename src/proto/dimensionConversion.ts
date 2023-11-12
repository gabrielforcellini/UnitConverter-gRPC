import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { InchToCentimeterClient as _dimensionConversionPackage_InchToCentimeterClient, InchToCentimeterDefinition as _dimensionConversionPackage_InchToCentimeterDefinition } from './dimensionConversionPackage/InchToCentimeter';
import type { KilometerToMileClient as _dimensionConversionPackage_KilometerToMileClient, KilometerToMileDefinition as _dimensionConversionPackage_KilometerToMileDefinition } from './dimensionConversionPackage/KilometerToMile';
import type { MeterToKilometerClient as _dimensionConversionPackage_MeterToKilometerClient, MeterToKilometerDefinition as _dimensionConversionPackage_MeterToKilometerDefinition } from './dimensionConversionPackage/MeterToKilometer';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  dimensionConversionPackage: {
    InchToCentimeter: SubtypeConstructor<typeof grpc.Client, _dimensionConversionPackage_InchToCentimeterClient> & { service: _dimensionConversionPackage_InchToCentimeterDefinition }
    InchToCentimeterRequest: MessageTypeDefinition
    InchToCentimeterResponse: MessageTypeDefinition
    KilometerToMile: SubtypeConstructor<typeof grpc.Client, _dimensionConversionPackage_KilometerToMileClient> & { service: _dimensionConversionPackage_KilometerToMileDefinition }
    KilometerToMileRequest: MessageTypeDefinition
    KilometerToMileResponse: MessageTypeDefinition
    MeterToKilometer: SubtypeConstructor<typeof grpc.Client, _dimensionConversionPackage_MeterToKilometerClient> & { service: _dimensionConversionPackage_MeterToKilometerDefinition }
    MeterToKilometerRequest: MessageTypeDefinition
    MeterToKilometerResponse: MessageTypeDefinition
  }
}

