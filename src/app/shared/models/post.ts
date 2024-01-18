
export interface Post {

  "@id": string,
  "@type": string,
  "id": number,
  "title": string,
  "slug": string,
  "content": string,
  "image": string,
  "user": {
    "@context": string,
    "@id": string,
    "@type": string,
    "firstName": string,
    "lastName": string
  },
  "category": {
    "@context": string,
    "@id": string,
    "@type": string,
    "id": number,
    "name": string,
    "slug": string
  }

}
