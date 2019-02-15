<template>
    <div
        class="carousel-wrapper"
        :style="{ width: width[active] }"
    >
        <p class="label">{{ label }}</p>
        <div style="height: 100%; width: 100%;">
            <span
                class="chevron-left hover"
                v-html="Chevron"
                v-if="active !== 0"
                @click="onChangeIndex(-1)"
                :style="{
                    top: height ? `${height / 2}px` : '50%',
                }"
            />
            <span
                class="chevron-right hover"
                v-html="Chevron"
                v-if="active !== (src.length - 1)"
                @click="onChangeIndex(1)"
                :style="{
                    top: height ? `${height / 2}px` : '50%',
                }"
            />
            <transition-group
                name="carousel"
                tag="div"
                style="height: 100%; width: 100%;"
            >
                <img
                    class="carousel-img"
                    :class="[type]"
                    :alt="alt[active]"
                    :src="src[active]"
                    :key="src[active]"
                    @load="onLoad"
                    :style="{ height: active !== 0 ? `${height}px` : 'auto' }"
                />
            </transition-group>
        </div>
    </div>
</template>

<script>
import Chevron from '!raw-loader!@/assets/chevron.svg';

export default {
    data() {
        return {
            active: 0,
            height: null,
            show: false,

            // assets
            Chevron,
        };
    },
    props: {
        alt: Array,
        label: String,
        src: Array,
        type: {
            type: String,
            default: 'width',
        },
        width: Array,
    },
    methods: {
        onLoad(e) {
            if (this.active === 0) {
                this.height = e.target.clientHeight;
            }
        },
        onChangeIndex(delta) {
            const newActive = this.active + delta;
            this.active = Math.max(Math.min(newActive, this.src.length - 1), 0);
        },
    },
}
</script>

<style>
    .carousel-wrapper {
        height: 100%;
        margin: auto;
        transition: width 0s;
        transition-delay: 0.1s;
        width: 100%;
        will-change: width;
    }

    .carousel-img {
        object-fit: contain;
        user-select: none;
    }

    .carousel-img.width {
        height: auto;
        width: 100%;
    }

    .carousel-img.height {
        height: 100%;
        width: auto;
    }

    .chevron-left,
    .chevron-right {
        cursor: pointer;
        position: absolute;
        top: 50%;
    }

    .chevron-left > svg,
    .chevron-right > svg {
        height: 50px;
        opacity: 0.6;
        width: 50px;
    }

    .chevron-left {
        left: 0;
        transform: translateX(-200%) translateY(-50%) rotate(180deg);
    }

    .chevron-right {
        right: 0;
        transform: translateX(200%) translateY(-50%);
    }

    .label {
        font-family: inherit;;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 10px;
        text-transform: uppercase;
    }

    @media (max-width: 880px) {
        .chevron-left,
        .chevron-right {
            display: none;
        }
    }

    @media (max-width: 400px) {
        .label {
            font-size: 14px;
        }
    }
</style>

<style>
    .carousel-enter-active {
        transition: opacity var(--transition-duration) var(--transition-curve),
            transform var(--transition-duration) var(--transition-curve);
    }

    .carousel-leave-active {
        transition: opacity 0.1s var(--transition-curve),
            transform 0.1s var(--transition-curve);
    }

    .carousel-leave-active {
        position: absolute;
        top: 0;
        left: 0;
    }

    .carousel-enter {
        opacity: 0;
        transform: translateX(20px);
    }

    .carousel-leave-to {
        opacity: 0;
        transform: translateX(-20px);
    }
</style>
