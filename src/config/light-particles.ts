export const LightParticlesConfig = {
    fpsLimit: 40,
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ["#c1c1c1", "#ececec"]
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        size: {
            value: 3,
            random: true
        },
        move: {
            enable: true,
            speed: 0.8,
            random: false
        }
    },
    interactivity: {
        events: {
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        }
    },
    background: {
        color: "#fcfcfc"
    }
}
