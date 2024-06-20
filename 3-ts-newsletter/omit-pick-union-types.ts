type Album = {
  id: number;
  title: string;
  artist: string;
  year: number;
};

type AlbumWithoutId = Omit<Album, "id">;

// The album
const album: AlbumWithoutId = {
  title: "The Dark Side of the Moon",
  artist: "Pink Floyd",
  year: 1973,
};

type CollectorEdition = {
  id: number;
  title: string;
  limitedEditionFeatures: string[];
};

type DigitalRelease = {
  id: number;
  title: string;
  digitalFormat: string;
};

type MusicProduct = Album | CollectorEdition | DigitalRelease;

type MusicProductWithoutId = Omit<MusicProduct, "id">;

// the music product
const musicProduct: MusicProductWithoutId = {
  title: "The Dark Side of the Moon",
};

type DistributiveOmit<T, K extends PropertyKey> = T extends any
  ? Omit<T, K>
  : never;

type MusicProductWithoutId2 = DistributiveOmit<MusicProduct, "id">;

const musicProduct2: MusicProductWithoutId2 = {
  title: "The Dark Side of the Moon",
  digitalFormat: "mp3",
  limitedEditionFeatures: ["vinyl"],
};

console.log(musicProduct);

console.log(musicProduct2);
