import { useEffect, useState } from "react";
import { fetchArtists } from "../../Api";
import { TArtist } from "../../types/TArtist";
import { Artist } from "./Artist";


export const ArtistsList = () => {
    const [artists, setArtists] = useState<TArtist[]>([]);

    useEffect(() => {
        fetchArtists()
        .then(
            (result) => {
                if (!result) return
                const artistsData = result.map((item: {name: string, image: any}) => {
                    const artist: TArtist = {
                        artistName: item.name,
                        artistImgSrc: item.image[0]['#text']
                    }
                    return artist
                })
                setArtists(artistsData)
            }
        );
    }, []);

    return (
        <ul className="main__artists-list">
            {artists.map((artist, idx) => 
                <Artist 
                    key={idx}
                    artistName={artist.artistName}
                    artistImgSrc={artist.artistImgSrc}
                />
            )}
        </ul>
    );
};
