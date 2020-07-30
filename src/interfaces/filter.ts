export interface FilterValue {
  value: string,
  name: string
}

export enum FilterPrimitiveTypes {
  STRING = 'STRING',
  INTEGER = 'INTEGER'
}

export enum FilterEntityTypes {
  DATE_TIME = 'DATE_TIME'
}

export interface Filter {
  id: string,
  name: string,
  values?: FilterValue[],
  validation?: {
    primitiveType: FilterPrimitiveTypes,
    min?: number,
    max?: number,
    pattern?: string,
    entityType?: FilterEntityTypes
  }
}
