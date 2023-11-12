import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CelsiusToFahrenheitClient as _temperatureConversionPackage_CelsiusToFahrenheitClient, CelsiusToFahrenheitDefinition as _temperatureConversionPackage_CelsiusToFahrenheitDefinition } from './temperatureConversionPackage/CelsiusToFahrenheit';
import type { CelsiusToKelvinClient as _temperatureConversionPackage_CelsiusToKelvinClient, CelsiusToKelvinDefinition as _temperatureConversionPackage_CelsiusToKelvinDefinition } from './temperatureConversionPackage/CelsiusToKelvin';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  temperatureConversionPackage: {
    CelsiusToFahrenheit: SubtypeConstructor<typeof grpc.Client, _temperatureConversionPackage_CelsiusToFahrenheitClient> & { service: _temperatureConversionPackage_CelsiusToFahrenheitDefinition }
    CelsiusToFahrenheitRequest: MessageTypeDefinition
    CelsiusToFahrenheitResponse: MessageTypeDefinition
    CelsiusToKelvin: SubtypeConstructor<typeof grpc.Client, _temperatureConversionPackage_CelsiusToKelvinClient> & { service: _temperatureConversionPackage_CelsiusToKelvinDefinition }
    CelsiusToKelvinRequest: MessageTypeDefinition
    CelsiusToKelvinResponse: MessageTypeDefinition
  }
}

