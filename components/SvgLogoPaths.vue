<script setup lang="ts">
import { motion } from 'motion-v'

const anim = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: {
                duration: 2,
                ease: "easeInOut"
            },
            opacity: {
                duration: 0.5
            }
        }
    }
}
</script>
<template>
    <motion.svg
        width="233"
        height="18"
        viewBox="0 0 233 18"
        class="border"
        fill="#dedede"
        initial="hidden"
        while-in-view="visible"
    >
        <motion.path 
            d="M 7.752 0.920044 C 9.176 0.920044 10.408 1.19204 11.448 1.73604 C 12.488 2.26404 13.368 3.04804 14.088 4.08804 L 12.36 5.74404 C 11.752 4.81604 11.064 4.15204 10.296 3.75204 C 9.544 3.33604 8.648 3.12804 7.608 3.12804 C 6.84 3.12804 6.208 3.23204 5.712 3.44004 C 5.216 3.64804 4.848 3.92804 4.608 4.28004 C 4.384 4.61604 4.272 5.00004 4.272 5.43204 C 4.272 5.92804 4.44 6.36004 4.776 6.72804 C 5.128 7.09604 5.776 7.38404 6.72 7.59204 L 9.936 8.31204 C 11.472 8.64804 12.56 9.16004 13.2 9.84804 C 13.84 10.536 14.16 11.408 14.16 12.464 C 14.16 13.44 13.896 14.288 13.368 15.008 C 12.84 15.728 12.104 16.28 11.16 16.664 C 10.232 17.048 9.136 17.24 7.872 17.24 C 6.752 17.24 5.744 17.096 4.848 16.808 C 3.952 16.52 3.168 16.128 2.496 15.632 C 1.824 15.136 1.272 14.568 0.839996 13.928 L 2.616 12.152 C 2.952 12.712 3.376 13.216 3.888 13.664 C 4.4 14.096 4.992 14.432 5.664 14.672 C 6.352 14.912 7.112 15.032 7.944 15.032 C 8.68 15.032 9.312 14.944 9.84 14.768 C 10.384 14.592 10.792 14.336 11.064 14 C 11.352 13.648 11.496 13.232 11.496 12.752 C 11.496 12.288 11.336 11.88 11.016 11.528 C 10.712 11.176 10.136 10.904 9.288 10.712 L 5.808 9.92004 C 4.848 9.71204 4.056 9.41604 3.432 9.03204 C 2.808 8.64804 2.344 8.18404 2.04 7.64004 C 1.736 7.08004 1.584 6.45604 1.584 5.76804 C 1.584 4.87204 1.824 4.06404 2.304 3.34404 C 2.8 2.60804 3.512 2.02404 4.44 1.59204 C 5.368 1.14404 6.472 0.920044 7.752 0.920044 Z"
            fill="none"
            stroke="#3b82f6"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="visible"
            :variants="anim"
        />
        <!--s-->
        <motion.path 
            d="M 31.5744 1.16003 V 10.928 C 31.5744 13.024 31.0224 14.6 29.9184 15.656 C 28.8144 16.712 27.2064 17.24 25.0944 17.24 C 23.0144 17.24 21.4144 16.712 20.2944 15.656 C 19.1904 14.6 18.6384 13.024 18.6384 10.928 V 1.16003 H 21.2064 V 10.616 C 21.2064 12.104 21.5264 13.208 22.1664 13.928 C 22.8064 14.648 23.7824 15.008 25.0944 15.008 C 26.4224 15.008 27.4064 14.648 28.0464 13.928 C 28.6864 13.208 29.0064 12.104 29.0064 10.616 V 1.16003 H 31.5744 Z"
            fill="none"
            stroke="#3b82f6"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="visible"
            :variants="anim"
        />
        <!--U-->
        <motion.path 
            d="M 39.7341 14.792 H 48.4701 V 17 H 37.1661 V 1.16003 H 39.7341 V 14.792 Z"
            fill="none"
            stroke="#3b82f6"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="visible"
            :variants="anim"
        />
        <!--L-->
        <motion.path 
            d="M 52.7332 17 V 1.16003 H 64.2052 V 3.36803 H 55.3012 V 7.92803 H 62.2612 V 10.088 H 55.3012 V 14.792 H 64.5412 V 17 H 52.7332 Z"
            fill="none"
            stroke="#3b82f6"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="visible"
            :variants="anim"
        />
        <!--E-->
        <motion.path 
            d="M 71.7591 1.16003 V 17 H 69.1911 V 1.16003 H 71.7591 Z"
            fill="none"
            stroke="#3b82f6"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="visible"
            :variants="anim"
        />
        <!--I-->
        <motion.path 
            d="M 93.8567 1.16003 V 17 H 91.4807 V 7.83203 L 91.6727 3.46403 H 91.6487 L 86.8247 17 H 84.6887 L 79.8647 3.46403 H 79.8407 L 80.0327 7.83203 V 17 H 77.6567 V 1.16003 H 81.4727 L 84.6647 10.328 L 85.7687 14.096 H 85.8167 L 86.9447 10.328 L 90.1127 1.16003 H 93.8567 Z"
            fill="none"
            stroke="#3b82f6"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="visible"
            :variants="anim"
        />
        <!--M-->
        <motion.path 
            d="M 112.915 17 H 110.203 L 108.691 12.848 H 102.043 L 100.531 17 H 97.8909 L 103.867 1.16003 H 106.939 L 112.915 17 Z M 102.763 10.76 H 107.971 L 105.379 3.36803 L 102.763 10.76 Z"
            fill="none"
            stroke="#3b82f6"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="visible"
            :variants="anim"
        />
        <!--A-->
        <motion.path 
            d="M 129.908 1.16003 V 17 H 126.86 L 120.74 7.01603 L 119.204 4.20803 H 119.18 L 119.276 6.77603 V 17 H 116.924 V 1.16003 H 119.948 L 126.044 11.12 L 127.604 13.976 H 127.628 L 127.532 11.384 V 1.16003 H 129.908 Z"
            fill="none"
            stroke="#3b82f6"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="visible"
            :variants="anim"
        />
        <!--N-->
        <motion.path 
            d="M 157.784 1.16003 V 17 H 155.192 V 1.16003 H 157.784 Z M 147.368 1.16003 V 17 H 144.8 V 1.16003 H 147.368 Z M 156.488 7.88003 V 10.088 H 146.096 V 7.88003 H 156.488 Z"
            fill="#3b82f6"
            stroke="#3b82f6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="visible"
            :variants="anim"
        />
        <!--H-->
        <motion.path 
            d="M 176.824 17 H 174.112 L 172.6 12.848 H 165.952 L 164.44 17 H 161.8 L 167.776 1.16003 H 170.848 L 176.824 17 Z M 166.672 10.76 H 171.88 L 169.288 3.36803 L 166.672 10.76 Z"
            fill="#3b82f6"
            stroke="#3b82f6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="visible"
            :variants="anim"
        />
        <!--A-->
        <motion.path 
            d="M 197.033 1.16003 V 17 H 194.657 V 7.83203 L 194.849 3.46403 H 194.825 L 190.001 17 H 187.865 L 183.041 3.46403 H 183.017 L 183.209 7.83203 V 17 H 180.833 V 1.16003 H 184.649 L 187.841 10.328 L 188.945 14.096 H 188.993 L 190.121 10.328 L 193.289 1.16003 H 197.033 Z"
            fill="#3b82f6"
            stroke="#3b82f6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="visible"
            :variants="anim"
        />
        <!--M-->
        <motion.path 
            d="M 203.971 15.704 L 203.515 14.816 H 214.579 V 17 H 201.787 V 14.912 L 212.107 2.45603 L 212.563 3.34403 H 202.003 V 1.16003 H 214.291 V 3.24803 L 203.971 15.704 Z"
            fill="#3b82f6"
            stroke="#3b82f6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="visible"
            :variants="anim"
        />
        <!--Z-->
        <motion.path 
            d="M 232.432 17 H 229.72 L 228.208 12.848 H 221.56 L 220.048 17 H 217.408 L 223.384 1.16003 H 226.456 L 232.432 17 Z M 222.28 10.76 H 227.488 L 224.896 3.36803 L 222.28 10.76 Z"
            fill="#3b82f6"
            stroke="#3b82f6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="visible"
            :variants="anim"
        />
        <!--A-->
        <!--END-->
    </motion.svg>
</template>