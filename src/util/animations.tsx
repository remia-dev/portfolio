import { animate } from "framer-motion";

export const titleSubtitle = {
    initial:{
        y: 100,
        opacity: 0
    },
    animate:{
        y: 0,
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.7
        }
    }
}

export const blue = {
    initial: {
        x: 500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 2
        }
    }
}

export const black = {
    initial: {
        x: -200,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 2
        }

    }

}
