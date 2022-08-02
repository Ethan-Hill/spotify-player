export interface PlayerData {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      images: [
        {
          url: string;
        }
      ];
    };
  };
}
