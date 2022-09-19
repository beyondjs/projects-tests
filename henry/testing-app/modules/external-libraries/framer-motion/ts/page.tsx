import * as React from "react";
import {motion} from "framer-motion";

export /*bundle*/
function Page(): JSX.Element {
    console.log('motion', motion, motion.div)
    return (
        <>
            <motion.div
                animate={{scale: 2}}
                transition={{duration: 0.5}}
            />
        </>
    );
}