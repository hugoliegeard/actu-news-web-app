import {Post} from "./post";

export interface PostResponse {
  
  "hydra:totalItems": number,
  "hydra:member": Post[]
  
}