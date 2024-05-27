import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Card from "../../../shared/Cards/Card";
import smartyou from "../../../assets/smartyou.gif";

const Design = props => {
    return (
        <article>
            <NavBar />
            <div className="Cards">
                <Card
                    media={smartyou}
                    title={'SmartYou'}
                    description={'Figma for a class HUMAN-COMPUTER INTERACTION, the project is a mobile application for smartFit users, where they can schedule a space in the gym to avoid filling and oversaturation of the machines in the same, with a point system for the user to have benefits in the gym.'}
                    tech={'Figma'}
                    toWeb={'https://www.figma.com/design/nPe4kJxMps3G8JhWo7oTrp/SmartYou?node-id=0-1&t=z2sFgJSrduTrrl0R-1'}
                    buttonWeb={'Visit Site'}
                />
            </div>
        </article>
    );
};

export default Design;