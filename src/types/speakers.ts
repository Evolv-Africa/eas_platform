export interface Speaker {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  socials?: Social[];
  image?: Image;
}

export interface Social {
  name: string;
  url: string;
}

export interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}
