import { TArtist } from "../../types/TArtist";
import { Artist } from "./Artist";

interface IArtists {
    artists: TArtist[];
}

export const ArtistsList = (props: IArtists) => {
    return (
        <ul className="main__artists-list">
            {props.artists.map((artist, idx) => 
                <Artist 
                    key={idx}
                    image={artist.image[0]['#text']}
                    name={artist.name}
                />
            )}
        </ul>
    );
}