import React from "react";

import LandingHow from './landingHow';
import LandingShabak from './landingShabak';
import LandingWho from './landingWho';
import Newsletter from './newsletter';

export default function(){
    return (
        <div>
            <LandingShabak />
            <LandingWho />
            <LandingHow />
            <Newsletter />
        </div>
    );
}