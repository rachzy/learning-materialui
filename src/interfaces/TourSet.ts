import { ITour } from "./Tour";

export interface ITourSet {
  id: number;
  name: string;
  tours: ITour[];
}
