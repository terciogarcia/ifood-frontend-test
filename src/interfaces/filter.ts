export enum FilterPrimitiveTypes {
  STRING = 'STRING',
  INTEGER = 'INTEGER'
}

export enum FilterEntityTypes {
  DATE_TIME = 'DATE_TIME'
}

export interface FilterValue {
  value: string,
  name: string
}

export interface FilterValidation {
  primitiveType: FilterPrimitiveTypes,
  min?: number,
  max?: number,
  pattern?: string,
  entityType?: FilterEntityTypes
}

export interface Filter {
  id: string,
  name: string,
  values?: FilterValue[],
  validation?: FilterValidation
}
