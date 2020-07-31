import { FilterValidation, FilterPrimitiveTypes } from 'interfaces/filter';

export const getFilterError = (data: string, validation?: FilterValidation) => {
  if (!validation) return null;

  const { min, max, primitiveType } = validation;

  if (primitiveType === FilterPrimitiveTypes.INTEGER) {
    if ((`${data}`).match('/^d+$/')) {
      return 'Número inválido';
    }

    if (min && +data < min) {
      return `Não pode ser menor que ${min}`;
    }

    if (max && +data > max) {
      return `Não pode ser maior que ${max}`;
    }
  }

  return null;
};
