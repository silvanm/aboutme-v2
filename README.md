# About me 2017

Silvan's personal website, showing my weekend projects.

Side effect: A playground to learn about CSS and VueJS.

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## Note to myself

Convert GIF to mp4:

    ffmpeg -i insta-xmasleds.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2"  insta-xmasleds.mp4

Convert GIF to webm:

    ffmpeg -i insta-xmasleds.gif -c:v libvpx -crf 12 -auto-alt-ref 0 -b:v 500K insta-xmasleds.webm

Reduce MP4 from Snaggit for use on this size:

    ffmpeg -i greifenseeschwimmen.mp4  -vcodec libx264 -crf 18 greifenseeschwimmen-lower.mp4

Convert to webm:

    ffmpeg -i greifenseeschwimmen.mp4  -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2"  greifenseeschwimmen.webm


