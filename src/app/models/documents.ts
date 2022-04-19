export interface Documents {
  name: string;
  level: number;
  isFile: boolean;
  hasChildren: boolean;
  children: Documents[];
}
