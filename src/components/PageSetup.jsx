import React from "react";
import ParticleJS from "./Particle";
import { Grid, Image } from "semantic-ui-react";
import MyModal from "./MyModal";
import catfall from "../assets/catfall.png"
import CatCard from "./CatCard";
import './Page.css'

export default function PageSetup() {

    return (
        <div className="background-coloring">
            <ParticleJS />
            <Grid padded style={{ height: '120vh' }}>
                <Grid.Row style={{ height: '70%' }} columns={3} >
                    <Grid.Column >
                        <Image src={catfall} size='medium' floated="left" />
                    </Grid.Column>
                    <Grid.Column >
                        <div className="cat-card"> <CatCard /> </div>
                    </Grid.Column>
                    <Grid.Column >
                        <Image src={catfall} size='medium' floated="right" />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{ height: '30%' }}>
                    <Grid.Column >
                        <MyModal />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>

    )
}
