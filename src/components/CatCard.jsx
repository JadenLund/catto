import React from "react";
import { Card } from "semantic-ui-react";
import { Image } from "semantic-ui-react";

export default function CatCard() {
    const [catInfo, setCatInfo] = React.useState({ catInfo: "" });

    function handleClick() {
        console.log(catInfo)
    }

    React.useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?api_key=live_cryzeMviH86EMISpx1pIcPxIE0uVDaKMbZ2gFSeCEipxAwEztUwW38LZ75mtwl8h')
            .then(resp => resp.json())
            .then(data => setCatInfo(data[0]))
    }, [])

    return (
        <>
            <Card centered >

                <Image onClick={handleClick} className="cat-image" src={catInfo.url} />
                <Card.Content>
                    <Card.Header textAlign="center">Meow</Card.Header>
                    {/* if there is a cat breed, print it */}
                </Card.Content>
            </Card>

        </>
    );
};
