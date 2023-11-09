export type FormItemType = {
  key: string;
  label?: string;
  type?: string;
  default?: any;
  value?: any;
  elements?: any[];
  inputOptions?: {
    required?: boolean;
    numberOfLines?: number;
    selectedIconFirst?: boolean;
    placeholder?: string;
    selectOptions?: any[];
    multiline?: boolean;
  };
};
